import http from 'node:http';
import {getDataFromDB} from './database/db.js';
import {errors} from './errors/error.js'
import {sendJSONResponse} from "./util/sendJSONResponse.js";
import {getDataByPathParams} from "./util/getDataByPathParams.js";

const PORT = 3000;

http
    .createServer(async (req, res) => {

        const urlObj = new URL(req.url, `http://${req.headers.host}`)
        const queryParams = Object.fromEntries(urlObj.searchParams.entries())

        const destinations = await getDataFromDB()

        if (urlObj.pathname === '/api' && req.method === 'GET') {
            let filteredDestinations = destinations
            sendJSONResponse(res, 200, destinations)
        } else if (req.url.startsWith('/api/continents') && req.method === 'GET') {
            const continent = req.url.split('/').pop().toLowerCase()
            const filteredDestinations = getDataByPathParams(destinations, 'continent', continent)
            sendJSONResponse(res, 200, filteredDestinations)
        } else if (req.url.startsWith('/api/country') && req.method === 'GET') {
            const country = req.url.split('/').pop().toLowerCase()
            const filteredDestinations = getDataByPathParams(destinations, 'country', country)
            sendJSONResponse(res, 200, filteredDestinations)
        } else {
            sendJSONResponse(res, errors.notFound.statusCode, errors.notFound)
        }
    })
    .listen(PORT, () => {
        console.log(`Server running on port ${PORT}
        http://localhost:${PORT}`)
    })
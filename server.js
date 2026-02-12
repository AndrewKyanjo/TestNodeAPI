import http from 'node:http';
import {getDataFromDB} from './database/db.js';
import {errors} from './errors/error.js'
import {sendJSONResponse} from "./util/sendJSONResponse.js";

const PORT = 3000;

http
    .createServer(async (req, res) => {

        const destinations = await getDataFromDB()

        if (req.url === '/api' && req.method === 'GET') {
            res.setHeader('Content-Type', 'application/json')
            res.statusCode = 200;
            res.end(JSON.stringify(destinations))
        } else if (req.url.startsWith('/api/continents') && req.method === 'GET') {
            const continent = req.url.split('/').pop().toLowerCase()
            const filteredDestinations = destinations.filter(destination => {
                return destination.continent.toLowerCase() === continent
            })
            sendJSONResponse(res, 200, filteredDestinations)
        } else if (req.url.startsWith('/api/country') && req.method === 'GET') {
            const country = req.url.split('/').pop().toLowerCase()
            const filteredDestinations = destinations.filter(destination => {
                return destination.country.toLowerCase() === country
            })
            sendJSONResponse(res, 200, filteredDestinations)
        } else {
            sendJSONResponse(res, errors.notFound.statusCode, errors.notFound)
        }
    })
    .listen(PORT, () => {
        console.log(`Server running on port ${PORT}
        http://localhost:${PORT}`)
    })
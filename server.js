import http from 'node:http';
import {getDataFromDB} from './database/db.js';

const PORT = 3000;

http
    .createServer(async (req, res) => {

        const destinations = await getDataFromDB()

        if (req.url === '/api' && req.method === 'GET') {
            res.setHeader('Content-Type', 'application/json')
            res.statusCode = 200;
            res.end(JSON.stringify(destinations))
        }
    })
    .listen(PORT, () => {
        console.log(
            `Server running on port ${PORT}
        http://localhost:${PORT}`)
    })
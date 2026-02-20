import http from 'node:http'
import {serveStatic} from './utils/serveStatic.js'
import {handleGet, handlePost} from './handlers/routeHandlers.js'

const PORT = 8000

const __dirname = import.meta.dirname

http
    .createServer(async (request, response) => {

        if (request.url === '/api') {
            if (request.method === 'GET') {
                return await handleGet(response)
            }
            else if(request.method === 'POST') {
                handlePost(request, response)
            }

        } else if (!request.url.startsWith('/api')) {
            return await serveStatic(request, response, __dirname)
        }
    })
    .listen(PORT, () => {
        console.log(`Server running on http://localhost:${PORT}`)
    })
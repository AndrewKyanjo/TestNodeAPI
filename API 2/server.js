import http from 'node:http';

const PORT = 8000;

http
    .createServer((request, response) => {
        //response.statusCode = 200
        //response.setHeader('Content-Type', 'text/html')
        //New way of doing it
        response.writeHead(
            200,
            {'Content-Type': 'text/html'})
        response.end(`<html><h1>Hello World</h1></html>`)
    })
    .listen(PORT, () => {
        console.log(`Server running on http://localhost:${PORT}`)
    })
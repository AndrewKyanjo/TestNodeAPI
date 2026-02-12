import http from 'node:http';

const PORT = 3000;

http
    .createServer((req, res) => {
        res.end('Hello World');
    }).listen(PORT, () => {

    })
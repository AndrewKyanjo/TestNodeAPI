import http from 'node:http'

const PORT = 3000

http
    .createServer((request, response) => {
        console.log(request.url)

        const urlObj = new URL(request.url, `http://${request.headers.host}`)

        const queryObj = Object.fromEntries(urlObj.searchParams)
        console.log(queryObj)
    })
    .listen(PORT, () => {
        console.log(`Server running on http://localhost:${PORT}`)
    })
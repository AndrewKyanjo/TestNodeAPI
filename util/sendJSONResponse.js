export const sendJSONResponse = (res, status, payLoad) => {
    res.setHeader('Content-Type', 'application/json')
    res.statusCode = status;
    res.end(JSON.stringify(payLoad));
}
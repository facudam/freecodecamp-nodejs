const http = require('http');

const server = http.createServer((req, res) => {
    // console.log('===> req (solicitud)');
    // console.log(req.url)
    // console.log(req.method)
    // console.log(req.headers)

    console.log('===> res (respuesta)')
    // console.log(res)
    console.log(res.statusCode)
    res.end('damos fin al proceso')
})

const port = 3000;

server.listen(port, () => {
    console.log(`The server is listening to the port ${port}...`)
})
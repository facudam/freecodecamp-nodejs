const http = require('http');

const servidor = http.createServer((req, res) => {
    res.end('Hola, amigo')
});

const puerto = 3000;

servidor.listen(puerto, () => {
    console.log(`El servidor esta escuchando en el puerto ${puerto}...`)
})

// Al ejecutar node así, creamos un servidor en el puerto 3000: node app.js

function saludar(nombre) {
    return `Hola, ${nombre}`;
}

function holaMundo() {
    return 'Hola, mundo'
}

// module.exports.saludar = saludar;
// module.exports.holaMundo = holaMundo;

module.exports = {
    saludar,
    holaMundo
}

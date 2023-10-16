const estatusPedido = () => { //Simplemente simulamos un proceso asíncrono
    return Math.random() < 0.8;
}

const miPedidoDePizza = new Promise((resolve, reject) => {
    setTimeout(() => {
        if (estatusPedido()) {
            resolve('¡Pedido exitoso!')
        } else {
            reject('Ha ocurrido un error.')
        }
    }, 3000)
})

// const manejarPedido = (mensajeDeConfirmacion) => {
//     console.log(mensajeDeConfirmacion)
// }
// const rechazarPedido = (mensajeDeError) => {
//     console.log(mensajeDeError)
// }

// miPedidoDePizza.then(manejarPedido, rechazarPedido);

miPedidoDePizza
    .then((mensajeDeConfirmacion) => {
        console.log(mensajeDeConfirmacion)
    })
    .catch((mensajeDeError) => {
        console.log(mensajeDeError)
    });


const EventEmitter = require('events') //Por convención los nombres de las clases comienzan con mayúscula.

const emisorProductos = new EventEmitter()

emisorProductos.on('compra', () => { // Utilizamos .on para que cada vez que se llame al evento compra se ejecute el codigo que ponemos abajo:
    console.log('Se realizó una compra.')
})

emisorProductos.on('carrito', (total) => {
    console.log(`Se han añadido ${total} productos al carrito`) //A estas funciones que aguardan a que ocurra el evento se les llama eventHandlers.
})

emisorProductos.emit('compra') // Acá emitimos o llamamos al evento compra.
emisorProductos.emit('carrito', 3)
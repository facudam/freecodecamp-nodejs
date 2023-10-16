function ordenarProducto(producto) {
	return new Promise((resolve, reject) => {
		console.log(`Ordenando: ${producto} de mercado libre`);
		setTimeout(() => {
			if (producto === 'taza') {
				resolve('Ordenando una taza...')
			} else {
				reject('Este producto no está disponible actualmente.')
			}
		}, 2000)
	})
}

function procesarPedido(respuesta) {
	return new Promise(resolve => {
		console.log('Procesando la respuesta...')
		console.log(`La respuesta fue: "${respuesta}"`)
		setTimeout(() => {
			resolve('Gracias por su compra, disfrute su producto.')
		}, 4000)
	})
}

// ordenarProducto('taza')
// 	.then(respuesta => {
// 		console.log('Respuesta recibida');
// 		console.log(respuesta);
// 		return procesarPedido(respuesta);
// 	})
// 	.then(respuestaProcesada => { //Este then viene de la promesa procesarPedido. A esto se le llama chaining promises.
// 		console.log(respuestaProcesada)
// 	})
// 	.catch(error => {
// 		console.log(error)
// 	})

async function realizarPedido(producto) {
	try {
		const respuesta = await ordenarProducto(producto);
		console.log('Respuesta recibida');
		console.log(respuesta)
		const respuestaProcesada = await procesarPedido(respuesta);
		console.log(respuestaProcesada)
	} catch (error) {
		console.log(error)
	}
}

realizarPedido('taza')

const fs = require('fs')

// fs.readFile('fs/index.html', 'utf-8', (err, contenido) => {
//     if (err) {
//         //console.log(err) Nos muestra el error y después sigue ejecutando el resto del código.
//         throw err //Nos arroja el error en la terminal y para la ejecución.
//     } else {
//         console.log(contenido)
//     }
// })

// fs.rename('fs/main.html', 'fs/index.html', (err) => {
//     if (err) throw err;
//     console.log('nombre cambiado exitosamente')
// })


// Agregar contenido al final de un archivo
// fs.appendFile('fs/index.html', '<p>Finakl</p>', (err) => {
//     if (err) throw err;
//     console.log('archivo actualizado')
// })

// Reemplzar todo el contenido del archivo

// fs.writeFile('fs/index.html', 'contenido nuevo', (err) => {
//     if (err) throw err;
//     console.log('el contenido ha cambiado')
// })


// Eliminar archivos

fs.unlink('fs/prueba.html', (err) => {
    if (err) throw err;
    console.log('archivo eliminado')
})
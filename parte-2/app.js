// console.error(new Error('la cagaste!'))
//console.log(process.env)
//console.log(process.argv)


//Modulo OS (Operating system)
const os = require('os') //Se debe importar 
console.log(os.type()) //Obtenemos el tipo de sistema operativo
console.log(os.homedir()) // Obtenemos la dirección
console.log(os.uptime()) // Obtenemos el tiempo que el sistema operativo está encendido
console.log(os.userInfo()) //La información del usuario
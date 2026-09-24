
//1. Declaración de las variables e imports de módulos que usa el programa

// Importamos el módulo os(sistema operativo) nativo de Node.js
const os = require("node:os");

// Importamos el módulo de archivos nativo de Node.js
const fs = require("node:fs");


console.log('#######################################################')
// Usar la variable que contiene el módulo del sistema operativo de Node.js
// Imprimo el directorio home del usuario
console.log(os.homedir())

// Imprimo el sistema operativo del usuario
console.log(os.type())

// Imprimo la versión del sistema operativo del usuario
console.log(os.release())

// Imprimo la arquitectura del sistema operativo del usuario
console.log(os.arch())

console.log('#######################################################')

//Crear un archivo de texto usando el módulo de archivos fs nativo de Node.js
fs.writeFileSync("archivo.txt", "Hola mundo")







//2. Configuración de las funciones middleware



//3. Configuración de las rutas de la API




//4. Ejecución de la aplicación

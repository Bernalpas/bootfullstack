
//1. Módulos que utilizaremos
// Módulo Nativo (que ya lo tiene Node)del sistema operativo que maneja Node
const os = require('node:os');

// Módulo Nativo (que ya lo tiene Node) del Archivos del sistema operativo
const fs = require('node:fs');

// Módulo para reiniciar el servidor cuando hay cambios en el código
//const nodemon = require('nodemon');

// Módulo externo que no pertenece a la API de Node
const express = require('express');

// Variable para crear una instancia de la aplicación de Express
const app = express();

// Creamos una variable para el puerto en el que se ejecutará el servidor
const PORT = 9000;

// Generamos una ruta que atienda al pedido del cliente
// Método GET: solicita información del servidor
app.get('/hola', (peticion, respuesta) =>{
  respuesta.send('Hola Mundo, Bienvenido');
  // No podemos enviar dos respuestas a una misma petición del cliente
  //respuesta.send('Bienvenido');
})

//console.log(process); // procesos de Node que ejecutan el servidor
console.log(process.platform); // información del sistema operativo que maneja Node

// Ejecutamos el servidor en el puerto especificado
// 1. Necesita el puerto
app.listen(PORT, ()=>{
  console.log(`Servidor en el puerto http://localhost:${PORT}`);
} );








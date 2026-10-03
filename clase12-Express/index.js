
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

// importamos la librería dotenv
const dotenv = require('dotenv');

// utilizamos la librería dotenv
dotenv.config();

// ver los procesos de node
console.log('###############################################');
//console.log(process);
console.log(process.env.GOOGLE_API_KEY);
console.log(process.env.PORT);
console.log('###############################################');

// Creamos una variable para el puerto en el que se ejecutará el servidor
const PORT = process.env.PORT; //8080

// Generamos una ruta que atienda al pedido del cliente
// Método GET: solicita información del servidor
app.get('/hola', (peticion, respuesta) =>{
  respuesta.send('Hola Mundo, Bienvenido');
  // No podemos enviar dos respuestas a una misma petición del cliente
  //respuesta.send('Bienvenido');
})

app.get('/file', function(peticion, respuesta){
  //respuesta 1
  respuesta.send(`El nombre de este archivo es: ${__filename}`);

/*   let edad = 25;

  if(edad >= 18){
    // respuesta 2
    respuesta.send('Es mayor de edad');
  }
  else{
    respuesta.send('Es menor de edad');
  } */

});

app.get('/dir', function(peticion, respuesta){
  respuesta.send(`El nombre de esta carpeta es: ${__dirname}`);
});

//console.log(process); // procesos de Node que ejecutan el servidor
console.log(process.platform); // información del sistema operativo que maneja Node

// Enviamos un html
app.get('/html', function(peticion, respuesta){

  let nombre = "Pepe"

  //respuesta.send("<h1>Hola Admin " + nombre + "!! Bienvenido al servidor</h1>");

  respuesta.send(`
    <h1 style="color: blue; margin-top: 35px; text-align: center;">
      Hola Admin ${nombre}! Bienvenido al servidor
    </h1>
    `);
  

});

// Enviamos datos
app.get('/data', (req, res)=>{

  let datos = {
    nombre: "televisor 55 pulgadas",
    precio: 1000000,
    cantidad: 100,
    descripcion: "televisor 55 pulgadas con pantalla LED 4K",
    imagen: "https://armoto.vtexassets.com/arquivos/ids/165548-1200-auto?v=638463753607000000&width=1200&height=auto&aspect=true",
    envio: "Gratuito"
    }

    // envío los datos 
    res.json(datos)
});

// descarga de archivos
app.get('/descarga', (req, res)=>{
  res.download(__dirname + '/archivos/bootcamp.pdf');
});

// enviamos un archivo
app.get('/page', (req, res)=>{
  res.sendFile(__dirname + '/pages/index.html');
});

// Ejecutamos el servidor en el puerto especificado
// 1. Necesita el puerto
app.listen(PORT, ()=>{
  console.log(`Servidor en el puerto http://localhost:${PORT}`);
} );








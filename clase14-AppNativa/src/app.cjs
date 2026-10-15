// Este archivo es de configuración del servidor

//1. Importamos los módulos que utilizaremos
const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const path = require('node:path');

//2. Creamos la aplicación de Express
const app = express();

//3. Ejecutamos los Middlewares
app.use(morgan('dev'));
app.use(cors());
app.use(express.json());

//4. Agregamos el path del directorio public
app.use(express.static(path.join(__dirname, './public')));

//5. Exportamos la aplicación de Express
module.exports = app;



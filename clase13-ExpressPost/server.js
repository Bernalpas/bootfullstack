
// importamos las librerías:
const express = require("express");
const dotenv = require("dotenv");

// utilizamos la librería dotenv
dotenv.config();

// Configuramos el puerto
const PORT = process.env.PORT;

// creamos la app
const app = express();

//ruta live de la app
app.get('/', (req,res)=>{
  res.send(`
    <h1 style="color: blue; text-align: center; margin-top: 45px;">
      Servidor Trabajando Saludablemente
    </h1>`);
});

// Primer POST recibiendo datos: email y password de user
app.post('/login', (peticion, respuesta)=>{

  //console.log(peticion);
  console.log(peticion.url);
  console.log(peticion.body);

  respuesta.send('Email y Password recibidos');

});


// levantamos el servidor
app.listen(PORT, ()=>{
  console.log(`Servidor Trabajando en el Puerto http://localhost:${PORT}`);
});


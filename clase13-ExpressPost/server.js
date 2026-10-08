
// importamos las librerías:
const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");

// utilizamos la librería dotenv
dotenv.config();

// Configuramos el puerto
const PORT = process.env.PORT;

// creamos la app
const app = express();

//ejemplo de mi middleware persolnalizado
const prueba = (req, res, next) => {
  console.log("Pasó por el middleware llamado Prueba");

  next();

}

// Ejecuto antes de todas las rutas de mi app los middleware
app.use(prueba);
app.use(cors());// middleware para permitir el acceso a la API desde cualquier origen
app.use(express.json()); // middleware para parsear el body de la petición a JSON



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

  console.log("Llegó al POST");

  respuesta.send(`${peticion.body}`);

});


// levantamos el servidor
app.listen(PORT, ()=>{
  console.log(`Servidor Trabajando en el Puerto http://localhost:${PORT}`);
});


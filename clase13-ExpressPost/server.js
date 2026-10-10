
// importamos las librerías:
const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const morgan = require("morgan");

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
app.use(morgan('dev')); // middleware para registrar la info de las peticiones en la consola
//app.use(morgan('common'))
//app.use(morgan('combined'))



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

  //Sacamos los datos del body de la petición
  let email = peticion.body.email;
  let password = peticion.body.password;

  console.log(email);
  console.log(password);

  console.log("Llegó al POST");

  // Hardcodeamos datos de la base de datos
  let emailUser = "mario@gmail.com"
  let passwordUser = "123456" 

  if(email == emailUser && password == passwordUser){

    console.log("Datos Correctos");
    

    respuesta.send("Bienvenido Admin");
  }else{

    console.log("Datos Incorrectos");
    respuesta.send("Email o Password incorrectos");

  }

  //respuesta.send(`${peticion.body}`);
});

app.post('/private', (peticion, respuesta)=>{

  console.log(peticion.body);

  let producto = peticion.body.producto;
  let precio = peticion.body.precio;

  respuesta.send(`El producto ${producto} tiene un precio de ${precio}`);

});

//Manejo de errores 404: Antes de el listener, para que se ejecute antes de levantar el servidor
app.use((req, res, next) => {
  res.status(404).send(`
    <h1 style="color: red; text-align: center; margin-top: 45px;">
      Error 404: Página no encontrada
    </h1>`);
});


// levantamos el servidor
app.listen(PORT, ()=>{
  console.log(`Servidor Trabajando en el Puerto http://localhost:${PORT}`);
});


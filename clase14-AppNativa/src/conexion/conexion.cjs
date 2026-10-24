
// Importamos el módulo de conexión de Mongoose
const mongoose = require('mongoose');

// Podemos crear una variable para la conexion
const DB_LOCAL = process.env.DB_LOCAL;

// Conexión a la base de datos remota/servidor
const DB_ATLAS_URL = process.env.DB_ATLAS_URL;



// Creamos una función para la conexión a la base de datos
const connectDB = async () => {
  try {
    await mongoose.connect(DB_LOCAL);
    //Opción 2
    //await mongoose.connect(process.env.DB_LOCAL);
    console.log('Base de datos conectada');
  } catch (error) {
    console.error('Error al conectar a la base de datos: ', error);
    process.exit(1);
  }
};

// Exportamos la función de conexión
module.exports = connectDB;
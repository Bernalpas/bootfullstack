
// Importamos el módulo de conexión de Mongoose
const mongoose = require('mongoose');


// Creamos una función para la conexión a la base de datos
const connectDB = async () => {
  try {
    await mongoose.connect('mongodb://localhost:27017/appnativa');
    console.log('Base de datos conectada');
  } catch (error) {
    console.error('Error al conectar a la base de datos: ', error);
    process.exit(1);
  }
};

// Exportamos la función de conexión
module.exports = connectDB;
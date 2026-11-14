
// Importamos el módulo de conexión de Mongoose
import mongoose from 'mongoose';

// Creamos una función para la conexión a la base de datos
const connectDB = async (URL_CONEXION) => {
  try {
    await mongoose.connect(URL_CONEXION);
    console.log('Base de datos conectada');
  } catch (error) {
    console.error('Error al conectar a la base de datos: ', error);
    process.exit(1);
  }
};

// Exportamos la función de conexión
export default connectDB;
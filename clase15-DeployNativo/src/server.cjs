
// Este archivo tiene dos responsabilidades: conectar a la DB y levantar el servidor

const dotenv = require('dotenv');
dotenv.config();

// 1. Importamos la aplicación de Express
const app = require('./app.cjs');

// 2. Importamos la función de conexión a la base de datos
const connectDB = require('./conexion/conexion.cjs');

const PORT = process.env.PORT;

// 2. Conectar a la Base de Datos
connectDB();

// 3. Levantar el Servidor
app.listen(PORT, () => {
    console.log(`Servidor levantado en el puerto http://localhost:${PORT}`);
})
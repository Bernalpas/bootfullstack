
// Este archivo tiene dos responsabilidades: conectar a la DB y levantar el servidor

const dotenv = require('dotenv');
dotenv.config();

// 1. Importamos la aplicación de Express
const app = require('./app.cjs');

const PORT = process.env.PORT;

// 2. Conectar a la Base de Datos

// 3. Levantar el Servidor
app.listen(PORT, () => {
    console.log(`Servidor levantado en el puerto http://localhost:${PORT}`);
})
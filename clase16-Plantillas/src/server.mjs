
import app from "./app.mjs"
import connectDB from "./conexion/conxion.mjs"
import dotenv from "dotenv"
dotenv.config()

// Conexión a la base de datos remota/servidor
const PORT = process.env.PORT || 3000

// Podemos crear una variable para la conexion
const DB_LOCAL = process.env.DB_LOCAL;

// Conexión a la base de datos remota/servidor
const DB_ATLAS_URL = process.env.DB_ATLAS_URL;

connectDB(DB_LOCAL)


app.listen(PORT, () => {
  console.log(`Server is running on port http://localhost:${PORT}`)
})

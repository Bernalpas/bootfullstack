// Configuración de la APP

//1. Imports de librerías con ES6
import express from "express"
import { engine } from "express-handlebars"
import morgan from "morgan"
import helmet from "helmet"
import cors from "cors"
import path from "node:path"
import fileURLToPath from "node:url" // sólo con versiones anteriores a 20.11

// Importamos las rutas de las páginas
import pagesRouter from "./routes/pagesRouters.mjs"

// Importamos el middleware de rateLimit
import apiLimiter from "./middlewares/rateLimit.mjs"

// Imports de fileURL a path: Versiones anteriores a 20.11
//const __filename = fileURLToPath(import.meta.url)
//const __dirname = path.dirname(__filename)

// Alternativa moderna para Node.js >= 20.11
const __filename = import.meta.filename;
const __dirname = import.meta.dirname;

//2. Creación de la App
const app = express()

//===========================
// Fase 1: Seguridad
//===========================
app.use(apiLimiter)
app.use(cors())

// helmet() aplica una CSP por cabecera HTTP. Hay que configurarla aquí,
// porque el navegador aplica TODAS las CSP (cabecera + meta) y gana la más restrictiva.
app.use(helmet({
  contentSecurityPolicy: {
    directives: {
      ...helmet.contentSecurityPolicy.getDefaultDirectives(),
      "img-src": ["'self'", "data:", "https://images.unsplash.com"],
      "script-src": ["'self'", "https://cdn.jsdelivr.net"],
      "style-src": ["'self'", "'unsafe-inline'", "https://cdn.jsdelivr.net"]
    }
  }
}))

//===========================
// Fase 2: Observación y Parseo de Datos
//===========================
app.use(morgan("dev"))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

//===========================
// Fase 3: Renderizado
//===========================
app.use(express.static(path.join(__dirname, "public")))

//Configuración de Hbs
app.engine("hbs", engine({
  extname: ".hbs",
  defaultLayout: "main",
  layoutsDir: path.join(__dirname, "views/layouts"),
  partialsDir: path.join(__dirname, "views/partials")
}))

app.set("view engine", "hbs")
app.set("views", path.join(__dirname, "views"))

//===========================
// Fase 4: Rutas
//===========================
app.use("/", pagesRouter)

//===========================
// Fase 5: Manejo de Errores
//===========================


// Exportamos la App configurada
export default app


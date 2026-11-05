// Configuración de la APP

//1. Imports de librerías con ES6
import express from "express"
import morgan from "morgan"
import helmet from "helmet"
import cors from "cors"
import rateLimit from "express-rate-limit"
import path from "node:path"
import fileURLToPath from "node:url"

// Imports de fileURL a path
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)


//2. Creación de la App
const app = express()

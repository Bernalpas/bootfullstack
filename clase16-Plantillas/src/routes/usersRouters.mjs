
import express from "express"
const router = express.Router()

// importamos el validator
import { check } from "express-validator"

import { registerUser } from "../controllers/usersControllers.mjs";

// es ruta responde a /api/users



router.post(
  "/register", //ruta
  [
    check("nombre").isString().isLength({ min:3, max: 30 }).withMessage("El nombre debe ser de tipo texto y de tres caracteres como mínimo"),
    check("email").isEmail().withMessage("El email debe ser válido"),
    check("password").isLength({ min: 6, max: 12 }).isAlphanumeric().withMessage("La contraseña debe tener al menos 6 caracteres y alfanumérico"),
  ], //validaciones
  registerUser //controlador
)


export default router



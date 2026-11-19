
// importar el validador de express-validator
import { validationResult } from "express-validator";

// importamos la librería para encriptar la contraseña
import bcrypt from "bcrypt";

// importamos el modelo de usuario
import User from "../models/userModel.mjs";




// 1. Validar los campos
const registerUser = async (req, res) => {

  //1. Validar los campos
  const errors = validationResult(req);

  console.log(errors);

  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  // desestructuring
  const { nombre, email, password } = req.body

  console.log(password);

 // 2. Encriptar la contraseña

 // 2.1 Generamos la salt
  const salt = bcrypt.genSaltSync(10);
  console.log(salt);

  // 2.2 Encriptamos la contraseña
  const encryptedPassword = bcrypt.hashSync(password, salt);
  console.log(encryptedPassword);

  // 3. Generar un usuario en la base de datos
  const user = {
    name: nombre,
    email,
    password: encryptedPassword,
  }

  //4. Guardamos al user en la database
  const newUser = await User.create(user);

  res.status(200).render("registro-exitoso", {
    nombre,
    email,
    loginUrl: "/login",
    homeUrl: "/",
    customStyle: "login",
    title: "Registro",
  })

  
}


export { 
  registerUser 
}
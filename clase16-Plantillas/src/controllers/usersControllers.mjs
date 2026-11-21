
// importar el validador de express-validator
import { validationResult } from "express-validator";

// importamos la función para encriptar la contraseña
import encryptPassword from "../helpers/encriptar.mjs";

// importamos la librería para encriptar la contraseña
import bcrypt from "bcrypt";

// importamos el modelo de usuario
import User from "../models/userModel.mjs";



// Registro de usuarios
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

  // 2.1 Encriptamos la contraseña con la función de encriptar.mjs
  const encryptedPassword = encryptPassword(password);
  console.log(encryptedPassword);

  // 2.1 Generamos la salt
  /* const salt = bcrypt.genSaltSync(10);
  console.log(salt); */

  // 2.2 Encriptamos la contraseña
  /* const encryptedPassword = bcrypt.hashSync(password, salt);
  console.log(encryptedPassword);
 */
  // 3. Generar un usuario en la base de datos
  const user = {
    name: nombre,
    email,
    password: encryptedPassword,
  }

  //4. Guardamos al user en la database
  try {

    //1. Verificamos si el email ya existe
    const emailExist = await User.findOne({ email });

    console.log(emailExist);// imprime el user

    // Si el email ya existe, devolvemos un error
    if (emailExist) {
      return res.status(409).render(
        "error-email", {
          title: "Error de Registro",
          email,
          customStyle: "login",
        }
      );
    }

    // Si no existe el email, creamos el usuario
    const newUser = await User.create(user);
    console.log(newUser);

    // Si está joya todo, renderizamos registro-exitoso
    res.status(200).render("registro-exitoso", {
      nombre,
      email,
      loginUrl: "/login",
      homeUrl: "/",
      customStyle: "login",
      title: "Registro",
    })
  } catch (error) {
    // Si hay un error, devolvemos un error interno del servidor
    console.log(error);
    return res.status(500).render(
      "error-registro", {
        title: "Error de Registro",
        mensaje: "Nuestros Ingenieros están trabajando para resolver este problema. Por favor, intentá nuevamente en unos minutos.",
        customStyle: "login",
      }
    );

  }


  
}

// Login de usuarios
const loginUser = async (req, res) => {

  const { email, password } = req.body;

  //1. Validar los campos
  const errors = validationResult(req);

  console.log(errors);

  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const emailExist = await User.findOne({ email });

  if (emailExist) {
    console.log("El email tiene un user válido");
  }

  console.log(emailExist);

  return res.status(200).render("bienvenida", {
    title: "Bienvenido",
    customStyle: "login",
    email: email,
  })
}


export { 
  registerUser,
  loginUser,
}
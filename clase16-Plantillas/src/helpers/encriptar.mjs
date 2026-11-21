

// importamos la librería para encriptar la contraseña
import bcrypt from "bcrypt";


// Función para encriptar la contraseña
const encryptPassword = (password) => {
  const salt = bcrypt.genSaltSync(10);
  const encryptedPassword = bcrypt.hashSync(password, salt);
  return encryptedPassword;
}

export default encryptPassword;
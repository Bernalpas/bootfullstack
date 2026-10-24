
// Esta Ruta responde a la API /user 

// Importamos el enrutador de Express
const express = require('express');
const router = express.Router();

// Importamos el modelo de usuario
const User = require('../models/userCollection.cjs');



// Rutas del USER
router.post('/contacto', (req, res)=>{

  // 1. Puedo separar los datos del objeto req.body
  /*
  const name = req.body.name;
  const email = req.body.email;
  const phone = req.body.phone;
  const comments = req.body.comments;
  const subject = req.body.subject;
 */
  // 2. Desestructurar los datos del objeto req.body en variables individuales
  const { name, email, phone, comments, subject } = req.body;

  // 3. Podemos crear un objeto con los datos del usuario
  const contacto = {
    name,
    email,
    phone,
    comments,
    subject,
  }

  // insertamos un documento en la Colección User
  User.create(contacto);

  // Imprimo los datos del usuario
  console.log(contacto);

  res.send(contacto);

});

// Exportamos el enrutador
module.exports = router;
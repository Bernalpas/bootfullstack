
// Esta Ruta responde a la API /user 

// Importamos el enrutador de Express
const express = require('express');
const router = express.Router();



// Rutas del USER
router.post('/contacto', (req, res)=>{

  // Imprimo los datos del usuario
  console.log(req.body);

  res.send(req.body);

});

// Exportamos el enrutador
module.exports = router;
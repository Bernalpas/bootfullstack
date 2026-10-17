
// 1. Esta ruta responde a la API /product

const express = require('express');
const router = express.Router();

// 2. Rutas

// Ruta para crear un producto
router.post('/create', (req, res)=>{

  console.log(req.body);
  res.send(req.body);

});


// Exportamos el enrutador
module.exports = router;

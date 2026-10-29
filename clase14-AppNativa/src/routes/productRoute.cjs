
// 1. Esta ruta responde a la API /product

const express = require('express');
const router = express.Router();

// Importamos el model Product
const Product = require('../models/productCollection.cjs');

// 2. Rutas

// Ruta para crear un producto
router.post('/create', (req, res)=>{

  console.log(req.body);

  Product.create(req.body);

  res.send("Producto creado con éxito");

});


// Exportamos el enrutador
module.exports = router;

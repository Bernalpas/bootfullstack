
// 1. Esta ruta responde a la API /product

const express = require('express');
const router = express.Router();

// Importamos el model Product
const Product = require('../models/productCollection.cjs');

// 2. Rutas

// Ruta para crear un producto
router.post('/create', async (req, res)=>{

  console.log(req.body);// objeto con los datos del producto

  const {
    imagen
  } = req.body;

  // Le asignamos una url de una imagen al producto
  imagen = `https://picsum.photos/200/300?random=${Math.floor(Math.random() * 100)}`;

  const producto = {
    name: req.body.name,
    price: req.body.price,
    stock: req.body.stock,  
    brand: req.body.brand,
    category: req.body.category,
    sortDesc: req.body.sortDesc,
    longDesc: req.body.longDesc,
    edadMinima: req.body.edadMinima,
    edadMaxima: req.body.edadMaxima,
    envio: req.body.envio,
    imagen
    }

  await Product.create(producto);

  res.send("Producto creado con éxito");

});


// Exportamos el enrutador
module.exports = router;

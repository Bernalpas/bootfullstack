
// importamos las rutas de express
const express = require('express');

// importo las rutas de express
const router = express.Router();

// esta ruta responde a la API /carrito


router.post('/create', (req, res)=>{
  console.log(req.body);
  res.send("Carrito creado con éxito");
});

router.get('/', (req, res)=>{
  res.send(`<html>
    <head>
      <title>Carrito</title>
    </head>
    <body>
      <h1>Soy la Respuesta del back de la ruta del Carrito</h1>
    </body>
  </html>`);
});
router.put('/update', (req, res)=>{
  console.log(req.body);
  res.send("Producto actualizado con éxito");
});

router.delete('/delete', (req, res)=>{
  console.log(req.body);
  res.send("Producto eliminado con éxito");
});


// exportamos el enrutador de carrito
module.exports = router;



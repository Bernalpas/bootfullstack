
// Import de mongoose
const mongoose = require('mongoose');

// Creamos el esquema de la colección 
const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  price: {
    type: Double,
    required: true
  },
});

// Creamos la colección Product
const Product = mongoose.model('Product', productSchema);

// Exportamos la colección Product
module.exports = Product;
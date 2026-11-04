
// Import de mongoose
const mongoose = require('mongoose');

// Creamos el esquema de la colección 
const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  stock: {
    type: Number,
    required: true
  },
  brand: {
    type: String,
    required: true
  },
  category:{
    type: String,
    required: true
  },
  sortDesc: {
    type: String,
    required: true
  },
  longDesc: {
    type: String,
    required: true
  },
  edadMinima: {
    type: Number,
    required: true
  },
  edadMaxima: {
    type: Number,
    required: true
  },
  envio: {
    type: Boolean,
    default: false
  },
  imagen: {
    type: String,
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

// Creamos la colección Product
const Product = mongoose.model('Product', productSchema);

// Exportamos la colección Product
module.exports = Product;
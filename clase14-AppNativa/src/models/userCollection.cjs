
//1. Importamos mongoose
const mongoose = require('mongoose');

//2. Importamos el Schema
const { Schema } = mongoose;

//3. Creamos el Schema, la estructura que nos crea la Colección
const userSchema = new Schema({
  nombre: {
    type: String,
    required: true,
  },
});


//1. Importamos mongoose
const mongoose = require('mongoose');

//2. Importamos el Schema
const { Schema } = mongoose;

//3. Creamos el Schema, la estructura que nos crea la Colección
const userSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  phone: {
    type: Number
  },
  comments: {
    type: String,
    required: true,
  },
  subject: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now()
  },
  client: {
    type: Boolean,
    default: true
  }

});

//4. Creamos el modelo
const User = mongoose.model('User', userSchema);

//5. Exportamos el modelo
module.exports = User;

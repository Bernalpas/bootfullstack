
import mongoose from 'mongoose';


const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    default: 'user',
    enum: ['admin', 'user'],
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

// Exportamos el modelo de usuario
export default mongoose.model('User', userSchema);
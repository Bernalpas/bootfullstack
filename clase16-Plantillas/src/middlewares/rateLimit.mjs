import rateLimit from "express-rate-limit"

// Limitar las peticiones por IP
const apiLimiter = rateLimit({
  windowMs: 1000 * 60 * 15, // ventana de 15 minutos
  max: 100, // maximo 100 peticiones por IP
  message: "Demasiadas peticiones por IP, por favor intenta más tarde",
  standardHeaders: true,
  legacyHeaders: false,
})

export default apiLimiter

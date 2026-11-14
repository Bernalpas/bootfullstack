
import express from 'express';
const router = express.Router();
import {
  getHome,
  getProducts,
  getAbout,
  getContact,
  getLogin,
  getPromos,
  getRegister
} from "../controllers/pagesControllers.mjs"

/* Esta ruta responde a / */
router.get("/", getHome)

router.get("/productos", getProducts)

router.get("/nosotros", getAbout)

router.get("/contacto", getContact)

router.get("/login", getLogin)

router.get("/promos", getPromos)

router.get("/registro", getRegister)



export default router;

import express from 'express';
const router = express.Router();
import {
  getHome,
  getProducts
} from "../controllers/pagesControllers.mjs"

/* Esta ruta responde a / */
router.get("/", getHome)

router.get("/productos", getProducts)



export default router;
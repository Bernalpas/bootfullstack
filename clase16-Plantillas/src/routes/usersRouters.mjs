
import express from "express"
const router = express.Router()

import { registerUser } from "../controllers/usersControllers.mjs";



router.post("/register", registerUser)


export default router



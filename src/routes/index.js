import express from "express"
import routerProducts from "./productRoutes.js"
const router = express.Router()

router.use('/products', routerProducts)
export default router
import express from "express"
import  routerProducts from "./productsRoutes.js";
import routerProductDetails from "./cartProductsRoutes.js"
const router = express.Router()

router.use('/products', routerProducts)
router.use('/cartproducts', routerProductDetails)
export default router

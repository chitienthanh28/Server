import express from "express"
import { routerProducts} from "./productRoutes.js";
import {routerProductDetails} from "./productDetailsRoutes.js"
const router = express.Router()

router.use('/products', routerProducts)
router.use('/productDetails', routerProductDetails )
export default router
const {Router} = require("express")
const productsRouter = Router()

const ProductsControllers = require("../controllers/ProductsControllers")
const productsControllers = new ProductsControllers()

productsRouter.post("/", productsControllers.create)
productsRouter.put("/", productsControllers.update)
productsRouter.get("/", productsControllers.index)

module.exports = productsRouter
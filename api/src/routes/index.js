const {Router} = require("express")
const routes = Router()

const productsRouter = require("./products.routes")

routes.use("/", productsRouter)

module.exports = routes
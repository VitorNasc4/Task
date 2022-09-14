const sqliteConnection = require("../database/sqlite")
const AppError = require("../utils/AppError")
const knex = require("../database/knex")

class ProductsControllers {
    async create(request, response) {
        const {nome_produto, quantidade, valor} = request.body

        const database = await sqliteConnection()
 
        const checkUserExist = database.get("SELECT * FROM products WHERE nome_produto = (?)", [nome_produto])
        if (checkUserExist.nome_produto === nome_produto) {
            throw new AppError("Produto já cadastrado")
        }

        await database.run("INSERT INTO products (nome_produto, quantidade, valor) VALUES (?, ?, ?)", [nome_produto, quantidade, valor])
    
        response.json()
    }

    async update(request, response) {
        const {nome_produto, quantidade} = request.body

        const database = await sqliteConnection()
        const product = await database.get("SELECT * FROM products WHERE nome_produto = (?)", [nome_produto])

        await database.run(`
            UPDATE products SET
            quantidade = (?),
            updated_at = DATETIME('now')
            WHERE nome_produto = (?)`,
            [quantidade, nome_produto ]
            )

        response.json()
    }

    async index(request, response) {
        const {nome_produto} = request.query
        
        const products = await knex("products")
            .select([
                "nome_produto",
                "quantidade",
                "valor"
            ])
            .where("nome_produto", nome_produto)
        
        return response.send({products})
    }
    
                
}

module.exports = ProductsControllers
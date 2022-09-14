const createProducts = 
`
CREATE TABLE IF NOT EXISTS products (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    nome_produto VARCHAR,
    quantidade INTEGER,
    valor INTEGER,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
	updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
 )
`
module.exports = createProducts
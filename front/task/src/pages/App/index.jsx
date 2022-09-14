import { api } from "../../services";
import { useState, useEffect } from "react";

import { Container, Form } from "./styles";

export function App() {
  const [nome_produto, setNome] = useState("")
  const [quantidade, setQuantidade] = useState("")
  const [valor, setValor] = useState("")

  const [search, setSearch] = useState("")

  const [product, setProduct] = useState({})
  
  async function sendToDatabase(nome_produto, quantidade, valor) {
    await api.post("/",{nome_produto, quantidade, valor})
      .then(() => {
        alert("Produto cadastrado com sucesso")
      })
      .catch(error => {
        if (error.response) {
          alert(error.response.data.message)
        } else {
          alert("Não foi possível cadastrar o produto")
        }
      })
  }

  function handleRegister() {

    if (!nome_produto || !quantidade || !valor) {
      return alert("Preencha todos os campos")
    }
    
    sendToDatabase(nome_produto, quantidade, valor)
    

  }

  async function handleSearch() {
    if (!search) {
      return alert("Preencha o campo de busca")
    }
    
    const response = await api.get(`/?nome_produto=${search}`)
    
    if (response.data.products == 0) {
      return alert("Produto não encontrado")
    } else {
      setProduct(response.data.products[0])
      setNome(product.nome_produto)
      setQuantidade(product.quantidade)
      setValor(product.valor)
    }
  }

  function handleAdd() {
    if (quantidade == "") {
      return alert("Preencha o campo de busca")
    }
    setQuantidade(quantidade + 1)
  }
  
  function handleRemove() {
    if (quantidade == "") {
      return alert("Preencha o campo de busca")
    }
    setQuantidade(quantidade - 1)
  }

  useEffect(() => {
    async function ChangeQuantidade() {
      await api.put("/",{nome_produto, quantidade})
      .catch(error => {
        if (error.response) {
          alert(error.response.data.message)
        } else {
          alert("Não foi possível aumentar a quantidade")
        }
      })
    }
    ChangeQuantidade()
 }, [quantidade])

  return (
    <Container>
      <Form>
        
        <h1>Cadastro de Produtos</h1>
        
        <input 
          placeholder="Nome do produto"
          onChange={e => setNome(e.target.value)}
        />
        <input 
          placeholder="Quantidade"
          type="number"
          onChange={e => setQuantidade(e.target.value)}
        />
        <input 
          placeholder="Valor"
          type="number"
          onChange={e => setValor(e.target.value)}
        />

        <button onClick={handleRegister}>
          Cadastrar
        </button>
      </Form>

      <h1>Busca de Produtos</h1>
      <label htmlFor="inputSearch">
        <input 
          id="inputSearch"
          placeholder="Nome do produto a ser buscado"
          onChange={e => setSearch(e.target.value)}
        />
        <button onClick={handleSearch}>
          Buscar
        </button>
      </label>
      <table>
        <thead>
          <tr>
            <th>Nome</th>
            <th>Quantidade</th>
            <th>Valor</th>
            <th></th>
            
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{nome_produto}</td>
            <td>{quantidade}</td>
            <td>{Number(valor).toFixed(2)}</td>
            <td>
              <button onClick={handleAdd}>Adicionar</button> - <button onClick={handleRemove}>Remover</button>
            </td>
          </tr> 
        </tbody>
      </table>
    </Container>
  )
}

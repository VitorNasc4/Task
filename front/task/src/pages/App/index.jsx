import { api } from "../../services";
import { useState, useEffect } from "react";

import { Container, Form } from "./styles";

export function App() {
  const [nome_produto, setNome] = useState("")
  const [quantidade, setQuantidade] = useState("")
  const [valor, setValor] = useState("")

  const [products, setProducts] = useState([])
  
  async function sendToTable(nome_produto) {
    console.log("CHEGUEIII")
    const response = await api.get(`/?nome_produto=${nome_produto}`)
    
    setProducts(prevState => [...prevState, response])
  }
  
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

      sendToTable(nome_produto)
  }

  function handleRegister() {

    if (!nome_produto || !quantidade || !valor) {
      return alert("Preencha todos os campos acima")
    }
    
    sendToDatabase(nome_produto, quantidade, valor)
    

  }

  // useEffect(() => {
  //   async function sendToTable(nome_produto) {
  //     const response = await api.get(`/?nome_produto=${nome_produto}`)
  //       setProducts(prevState => [...prevState, response])

  //       console.log("CHEGUEI")

  //     }
  //     sendToTable()
  //   }, [nome_produto])

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
          {/* <tr>
            <td>Mouse</td>
            <td>20</td>
            <td>10</td>
            <td>
              <button>Adicionar</button> - <button>Remover</button>
            </td>
          </tr> */}
          {
            products.map((product) => {
              console.log("CHEGUEEEEI")
              // <tr key={String(product.id)}>
              //   <td>{product.nome_produto}</td>
              //   <td>{product.quantidade}</td>
              //   <td>{product.valor}</td>
              //   <td>
              //     <button>Adicionar</button> - <button>Remover</button>
              //   </td>
              // </tr>
            })
          }
        </tbody>
      </table>
      
    </Container>
  )
}

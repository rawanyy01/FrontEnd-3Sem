import "./produto.css"

function Produto({nome, preco, descricao}) {
    return <p> Nome do produto: {nome}  R${preco} e  descricao do produto :{descricao} </p>
    
}

export default Produto
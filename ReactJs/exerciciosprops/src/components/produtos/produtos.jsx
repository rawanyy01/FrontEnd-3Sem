import Produto from "../exercicio2/produto"
import "./produtos.css"

export default function Produtos(params) {
        const produtos = [
            {
                nome: "tenis de marca",
                preco: 550,
                descricao: "Tenis"
            },
            {
                nome: "Camisa de marca",
                preco: 250,
                descricao: "Camisa"
            },
            

        ]


    return(
        produtos.map((produtinho) => {
            return (
                <Produto
                    nome={produtinho.nome}
                    preco={produtinho.preco}
                    descricao={produtinho.descricao}
                />
            )
        })
    )
}
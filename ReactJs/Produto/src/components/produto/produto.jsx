import "./produto.css"
import { useEffect, useState } from "react"
import img from '../../assets/image.jpg'
import api from "../../services/services"


export default function Produto() {
    //states e variáveis
    const [nome, setNome] = useState("")
    const [preco, setPreco] = useState(0)
    const [descricao, setDescricao] = useState("")
    const [quantidade, setQuantidade] = useState(0)
    const [imagem, setImagem] = useState(img)
    const [editar, setEditar] = useState(false)
    const [idProduto, setIdProduto] = useState(null)
    //const [produto, setProduto] = useState({ nome: "", preco: 0, descricao: "", quantidade: 0, imagem: "" })

    const [arrProdutos, setArrProdutos] = useState([])

    useEffect(() => {
        getProdutos()
    }, [])

    // ciclos de vida e funções
    async function cadastrarProduto(e) {
        e.preventDefault()//nao deixa o formulario ser postado

        // alert("Funcao cadastrar chamada")
        // return false

        //validar o formulario
        if (nome.trim().length == 0 || 
        descricao.trim().length == 0 ||
        isNaN(preco) || isNaN(quantidade)
        ) {
            alert("Preencha os campos corretamente!")
            return false;
        }

        //gerar o objeto que vai pra api
        const objCadastro = {
            nome,
            preco,
            descricao,
            quantidade,
            imagem: "image.jpg",

        }
        console.log(objCadastro);


        //cadastrar na api

        try {
            //faz requisição na API
            const retornoAPI = await axios.post("http://localhost:3000/produtos", objCadastro)

            console.log(retornoAPI);

            //valiando o retorno da API
            if (retornoAPI.status == 201) {
                const dadosCadastrados = await retornoAPI.data;
                //console.log(dadosCadastrados);//dado que acabou ser cadastrado
                setArrProdutos([...arrProdutos, dadosCadastrados])
                alert("Produto cadastrado com sucesso")

                limparFormulario()//limpar o formulário
            } else {
                alert("Problema inesperado")
            }


        } catch (error) {
            alert('Não foi possível salvar os dados')
            console.log(error);

        }
    }

    function limparFormulario() {
        setNome("")
        setDescricao("")
        setQuantidade(0)
        setPreco(0)
    }

    async function getProdutos() {
        try {
            //faz requisição na API
            const retornoAPI = await api.get("/produtos")
            //transforma o retorno que é json em objeto javascript
            const dados = await retornoAPI.data

            console.log(dados);

            //inserir os dados no state
            setArrProdutos(dados)

        } catch (error) {
            console.log("Erro ao buscar os produtos");
            console.log(error);
        }
    }

    async function deletar(id) {
        
        if(!confirm("Voce quer realmente apagar o produto?")){
        return false;
        }
        
        try {
            const retornoAPI = await api.delete(`/produtos/${id}`);

            if (retornoAPI.status == 200 && retornoAPI.statusText == "OK") {
                alert("Produto apagado com sucesso")

                //gerar uma nova lista com os produtos que sobraram
                const novaLista = arrProdutos.filter((prod) => {
                    return prod.id != id;
                });

                //atualiza a variavel de produtos
                setArrProdutos(novaLista)
            } else {
                alert("Algum erro ocorreu ao apagar")
            }



        } catch (error) {
            alert("Erro ao apagar o produto")
            console.log(error);

        }

    }

    async function editarProduto(e) {
    e.preventDefault()

    const objEditar = {
        nome,
        preco,
        descricao,
        quantidade,
        imagem: "image.jpg"
    }

    try {

        const retornoAPI = await api.put(`/produtos/${idProduto}`, objEditar);

        if(retornoAPI.status == 200) {
            alert("Produto editado com sucesso")

            getProdutos()

            setEditar(false)

            limparFormulario()
        }

    } catch (error) {
        alert("Erro ao editar o produto")
        console.log(error);
    }
    }

    //desempenho do componente da tela em si
    return (
        <>
            <header className="cabecalho">
                <h1 className="titulo--cinza" >SENAI</h1>
                <h1 className="titulo--vermelho">LOJA</h1>
            </header>

            <form className="formzin" action="" onSubmit={editar ? editarProduto : cadastrarProduto}>
                {/* <div className="input--image">
                    <input className="input--metade" type="text" id="imagem" placeholder="Image" onChange={(e) => setProduto({ ...produto, imagem: e.target.value })} />
                </div> */}
                <div className="input--dados">

                    <input className="input--metade"
                        type="text"
                        id="nome"
                        placeholder="Nome"
                        value={nome}
                        onChange={(e) => setNome(e.target.value)} />

                    <input className="input--metade"
                        type="number"
                        id="preco"
                        placeholder="Preço"
                        value={preco}
                        onChange={(e) => setPreco(parseFloat(e.target.value))} />

                    <input className="input--metade"
                        type="number"
                        id="quantidade"
                        placeholder="Quantidade"
                        value={quantidade}
                        onChange={(e) => setQuantidade(parseInt(e.target.value))} />

                    <input className="input--metade"
                        type="text"
                        id="descricao"
                        placeholder="Descrição"
                        value={descricao}
                        onChange={(e) => setDescricao(e.target.value)} />
                </div>

                {/* condicional para exibir o botao */}
                {editar && <button
                    type="button"
                    className="btn--cadastro"
                    onClick={() => {
                        setEditar(false)//faz esconder o botao 
                        limparFormulario()//faz resetar os states dos inputs
                    }}>
                    Cancelar
                </button>}
                {" "}
                <button type="submit" className="btn--cadastro">Adicionar Produto</button>
            </form>


            <section className="produtos">
                {arrProdutos.map((prod) => (
                    <div key={prod.id} className="produto">
                        <h2 className="produtos__titulo">{prod.nome}</h2>
                        <p className="produtos__descricao">
                            Preço: R$ {prod.preco.toFixed(2)}
                        </p>
                        <p className="produtos__descricao">Descrição: {prod.descricao}</p>
                        <p className="produtos__descricao">Quantidade: {prod.quantidade}</p>
                        <img src={img} alt={prod.nome} />
                        <a
                            className="produtos__a-deletar"
                            href=""
                            onClick={(e) => {
                                e.preventDefault()
                                deletar(prod.id)
                            }}>
                            Apagar
                        </a>
                        <button
                            className="produtos__btn-comprar">
                            Comprar
                        </button>
                        <a href=""
                            className=""
                            onClick={(e) => {
                                e.preventDefault();

                                setEditar(true)

                                setIdProduto(prod.id)

                                setNome(prod.nome)
                                setDescricao(prod.descricao)
                                setPreco(prod.preco)
                                setQuantidade(prod.quantidade)
                            }}>
                            Editar
                        </a>
                    </div>
                ))}
            </section>
        </>
    )
}

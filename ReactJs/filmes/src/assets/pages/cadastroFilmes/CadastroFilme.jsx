import "./CadastroFilme.css"
import Header from "../../../components/header/Header"
import Footer from "../../../components/footer/Footer"
import Cadastro from "../../../components/cadastro/Cadastro"
import Lista from "../../../components/lista/Lista"
import Alerta from "../../../components/alerta/Alerta"
import api from "../../../services/Services"
import { useEffect, useState } from "react"

const CadastroFilme = () => {

    // STATES
    const [valor, setValor] = useState("")
    const [editar, setEditar] = useState(false)

    const [imagem, setImagem] = useState("")
    const [listaFilmes, setListaFilmes] = useState([])
    const [listaGeneros, setListaGeneros] = useState([])

    const [idFilme, setIdFilme] = useState(0)
    const [idGenero, setIdGenero] = useState("")
    const [generoSelecionado, setGeneroSelecionado] = useState("")

    const getGeneros = async () => {
        try {
            const retornoAPI = await api.get("/Genero")
            setListaGeneros(retornoAPI.data)
        } catch (e) {

            Alerta({
                title: "Erro",
                text: "Erro ao buscar gêneros",
                icon: "error",
                confirmButtonText: "Continuar"
            })

            console.log(e)
        }
    }

    const getFilmes = async () => {

        try {
            const retornoAPI = await api.get("/Filme")
            setListaFilmes(retornoAPI.data)
        } catch (e) {

            Alerta({
                title: "Erro",
                text: "Erro ao buscar filmes",
                icon: "error",
                confirmButtonText: "Continuar"
            })

            console.log(e)
        }
    }

    useEffect(() => {
        getFilmes()
        getGeneros()
    }, [])

    const cadastrarFilme = async (e) => {
        e.preventDefault()

        if (valor.trim() === "") {
            Alerta({
                title: "Nome do filme",
                text: "Informe o nome do filme",
                icon: "warning",
                confirmButtonText: "Continuar"
            })
            return
        }

        const formData = new FormData()

        formData.append("Titulo", valor)
        formData.append("IdGenero", idGenero)

        if (imagem) {
            formData.append("Imagem", imagem)
        }

        try {
            await api.post("/Filme", formData,  {
      headers: {
        'Content-Type': `multipart/mixed;`
      }
    })

            Alerta({
                title: "Cadastro",
                text: "Filme cadastrado com sucesso!",
                icon: "success",
                confirmButtonText: "Continuar"
            })

            getFilmes()
            limparFormulario()

        } catch (e) {
            console.log(e)

            Alerta({
                title: "Erro",
                text: "Erro ao cadastrar filme",
                icon: "error",
                confirmButtonText: "Continuar"
            })
        }
    }

    const preEditar = (item) => {

        setEditar(true)

        setValor(item.titulo)

        setImagem(item.imagem)

        setIdFilme(item.idFilme)

        setIdGenero(item.idGenero)
    }


    const editarFilme = async (e) => {
        e.preventDefault()

        const formData = new FormData()

        formData.append("Titulo", valor)
        formData.append("IdGenero", idGenero)

        if (imagem) {
            formData.append("Imagem", imagem)
        }

        try {

            await api.put(`/Filme/${idFilme}`, formData, {
      headers: {
        'Content-Type': `multipart/mixed;`
      }
    })

            Alerta({
                title: "Edição",
                text: "Filme editado com sucesso!",
                icon: "success",
                confirmButtonText: "Continuar"
            })

            getFilmes()
            limparFormulario()

        } catch (e) {
            console.log(e)

            Alerta({
                title: "Erro",
                text: "Erro ao editar filme",
                icon: "error",
                confirmButtonText: "Continuar"
            })
        }
    }

    const excluirFilme = async (id) => {
        try {
            await api.delete(`/Filme/${id}`)
            Alerta({
                title: "Excluir",
                text: "Filme excluído com sucesso!",
                icon: "success",
                confirmButtonText: "Continuar"
            })
            getFilmes()
        } catch (e) {

            Alerta({
                title: "Erro",
                text: "Erro ao excluir filme",
                icon: "error",
                confirmButtonText: "Continuar"
            })
            console.log(e)
        }
    }

    const limparFormulario = () => {

        setValor("")

        setImagem("")

        setEditar(false)

        setIdFilme(0)

        setIdGenero("")
    }

    return (
        <>
            <Header />

            <main>

                <Cadastro
                    tituloCadastro="Cadastro de Filme"
                    placeholder="Filme"

                    visibilidade="flex"
                    visibilidadeImagem="flex"

                    funcCadastro={
                        editar
                            ? editarFilme
                            : cadastrarFilme
                    }

                    valor={valor}
                    setValor={setValor}

                    imagem={imagem}
                    setImagem={setImagem}

                    btnEditar={editar}

                    cancelarEdicao={limparFormulario}

                    listaGeneros={listaGeneros}

                    idGenero={idGenero}
                    setIdGenero={setIdGenero}

                    generoSelecionado={generoSelecionado}
                    setGeneroSelecionado={setGeneroSelecionado}
                />

                <Lista
                    tituloLista="Lista de Filmes"
                    lista={listaFilmes}
                    listaGeneros={listaGeneros}
                    tipoLista="filme"
                    visibilidade="table-cell"
                    visibilidadeImagem="table-cell"
                    funcExcluir={excluirFilme}
                    funcEditar={preEditar}
                />

            </main>

            <Footer />
        </>
    )
}

export default CadastroFilme
import Header from "../../components/header/Header"
import "./CadastroFilme.css"
import Footer from "../../components/footer/Footer"
import Cadastro from "../../components/cadastro/Cadastro"
import Lista from "../../components/lista/Lista"
import { useEffect, useState } from "react"
import api from "../../Services/services"
import Swal from "sweetalert2"
import { Alerta } from "../../components/alerta/Alerta"

const CadastroFilme = () => {
    //States e variaveis
    const [valor, setValor] = useState("")
    const [editar, setEditar] = useState(false)
    const [listaFilmes, setListaFilmes] = useState([])
    const [id, setId] = useState(0)
    const [idGenero, setIdGenero] = useState(1)
    const [listaGeneros, setListaGeneros] = useState([
        { idGenero: 1, nome: "Ação" },
        { idGenero: 2, nome: "Comédia" },
        { idGenero: 3, nome: "Terror" },
        { idGenero: 4, nome: "Ficção Científica" },
        { idGenero: 5, nome: "Romance" }
    ])

    //get
    //busca os generos para colocar no select do formulario
    const getGeneros = async () => {

        try {
            const retornoAPI = await api.get("/Genero")

            setListaGeneros(retornoAPI.data)


        } catch (error) {
            Alerta({
                title: 'Cadastro de Genero',
                text: 'Erro ao buscar gêneros',
                icon: 'error',
                confirmButtonText: 'Fechar'
            })
        }

    }

    const getFilmes = async () => {

        try {

            const retornoAPI = await api.get("/Filme")

            setListaFilmes(retornoAPI.data)

        } catch (error) {

            console.log(error)

        }

    }

    //post
    const cadastrarFilme = async (e) => {

        e.preventDefault()

        if (valor.trim().length === 0) {

            Alerta({
                title: 'Cadastro de Filme',
                text: 'Preencher o nome do filme',
                icon: 'warning',
                confirmButtonText: 'Fechar'
            })

            return
        }

        const formData = new FormData()

        formData.append("Titulo", valor)
        formData.append("IdGenero", idGenero)

        try {

            await api.post("/Filme", formData)

            Alerta({
                title: 'Cadastro de Filme',
                text: `${valor} cadastrado com sucesso`,
                icon: 'success',
                confirmButtonText: 'Fechar'
            })

            await getFilmes()

            setValor("")

        } catch (error) {

            console.log(error.response?.data)

            Alerta({
                title: 'Cadastro de Filme',
                text: 'Erro ao cadastrar filme',
                icon: 'error',
                confirmButtonText: 'Fechar'
            })
        }
    }

    //put
    const preEditar = (item) => {

        console.log(item)

        setValor(item.titulo)
        setId(item.idFilme)
        setIdGenero(item.idGenero)

        setEditar(true)
    }

    const editarFilme = async (e) => {

        e.preventDefault()

        if (valor.trim().length === 0) {

            Alerta({
                title: 'Cadastro de Filme',
                text: 'Preencher o nome do filme',
                icon: 'warning',
                confirmButtonText: 'Fechar'
            })

            return
        }

        const formData = new FormData()

        formData.append("Titulo", valor)
        formData.append("IdGenero", idGenero)

        try {

            console.log("ID:", id)
            console.log("Titulo:", valor)
            console.log("Genero:", idGenero)

            const retornoAPI = await api.put(
                `/Filme/${id}`,
                formData
            )

            if (
                retornoAPI.status === 200 ||
                retornoAPI.status === 204
            ) {

                Alerta({
                    title: 'Cadastro de Filme',
                    text: 'Filme editado com sucesso!',
                    icon: 'success',
                    confirmButtonText: 'Fechar'
                })

                await getFilmes()

                limparDados()
            }

        } catch (error) {

            console.log(error.response)
            console.log(error.response?.data)

            Alerta({
                title: 'Cadastro de Filme',
                text: 'Erro ao editar filme',
                icon: 'error',
                confirmButtonText: 'Fechar'
            })
        }
    }

    //delete
    const excluirFilme = async (item) => {
        // if (!confirm(`Quer apagar o genero ${item.nome}?`)) {
        //     return false
        // }

        const result = await Alerta({
            title: "Are you sure?",
            text: `Quer apagar o filme ${item.titulo}`,
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Apagar",
            cancelButtonText: "Cancelar"
        })

        if (!result.isConfirmed) {
            return false
        }

        try {

            const retornoAPI = await api.delete(`/Filme/${item.idFilme}`)

            if (
                retornoAPI.status === 200 ||
                retornoAPI.status === 204
            ) {
                Alerta({
                    title: 'Cadastro de Filme',
                    text: 'Filme excluído com sucesso!',
                    icon: 'success',
                    confirmButtonText: 'Fechar'
                })

                await getFilmes()

            }

        } catch (error) {
            Alerta({
                title: 'Cadastro de Filme',
                text: 'Erro ao excluir filme',
                icon: 'error',
                confirmButtonText: 'Fechar'
            })
        }

    }


    //funcoes auxiliares
    const limparDados = () => {

        setValor("")
        setEditar(false)

        setId(0)

        setIdGenero(1)

    }

    //Funcoes



    //ciclo de vida do componente
    useEffect(() => {
        getFilmes()
        getGeneros()
    }, [])

    return (
        <>
            <Header />
            <main>
                <Cadastro
                    tituloCadastro="Cadastro de Filme"
                    placeholder="filme"
                    visibilidade="block"

                    funcCadastro={
                        editar
                            ? editarFilme
                            : cadastrarFilme
                    }

                    valor={valor}
                    setValor={setValor}

                    listaGeneros={listaGeneros}

                    idGenero={idGenero}
                    setIdGenero={setIdGenero}

                    btnEditar={editar}
                    cancelarEdicao={limparDados}
                />

                <Lista
                    tituloLista="Lista de Filmes"
                    lista={listaFilmes}
                    tipoLista="filme"
                    funcExcluir={excluirFilme}
                    funcEditar={preEditar}
                    listaGeneros={listaGeneros}
                />

            </main>
            <Footer />
        </>
    )
}

export default CadastroFilme
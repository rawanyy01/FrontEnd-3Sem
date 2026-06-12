import "./CadastroGenero.css"
import Header from "../../components/header/Header"
import Footer from "../../components/footer/Footer"
import Cadastro from "../../components/cadastro/Cadastro"
import Lista from "../../components/lista/Lista"
import { useEffect, useState } from "react"
import api from "../../Services/services"
import Swal from "sweetalert2"
import { Alerta } from "../../components/alerta/Alerta"

const CadastroGenero = () => {
    // STATES
    const [valor, setValor] = useState("")
    const [listaGeneros, setListaGeneros] = useState([])
    const [editar, setEditar] = useState(false)
    const [id, setId] = useState(0)

    // BUSCAR GÊNEROS
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

    useEffect(() => {
        getGeneros()
    }, [])

    // CADASTRAR GÊNERO
    const cadastrarGenero = async (e) => {

        e.preventDefault()

        // validar campo
        if (valor.trim().length == 0) {
            // alert("O campo gênero é obrigatório!")
            Alerta({
                title: 'Cadastro de Genero',
                text: 'Preencher o Genero',
                icon: 'warning',
                confirmButtonText: 'Fechar'
            })
            // Swal.fire({
            //     title: 'Cadastro de Genero',
            //     text: 'Preencher o Genero',
            //     icon: 'warning',
            //     confirmButtonText: 'Fechar'
            // })
            return false
        }

        const objCadastro = {
            nome: valor
        }

        try {

            await api.post("/Genero", objCadastro)

            Alerta({
                title: 'Cadastro de Genero',
                text: `${valor} cadastrado com Sucesso`,
                icon: 'success',
                confirmButtonText: 'Fechar'
            })

            // atualizar lista
            await getGeneros()

            // limpar campo
            setValor("")

        } catch (error) {
            Alerta({
                title: 'Cadastro de Genero',
                text: 'Erro ao cadastrar gênero',
                icon: 'error',
                confirmButtonText: 'Fechar'
            })
        }

    }

    // LIMPAR DADOS
    const limparDados = () => {

        setValor("")
        setEditar(false)
        setId(0)

    }

    // EXCLUIR GÊNERO
    const excluirGenero = async (item) => {
        // if (!confirm(`Quer apagar o genero ${item.nome}?`)) {
        //     return false
        // }

        const result = await Alerta({
            title: "Are you sure?",
            text: `Quer apagar o genero ${item.nome}`,
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

            const retornoAPI = await api.delete(
                `/Genero/${item.idGenero}`
            )

            if (
                retornoAPI.status === 200 ||
                retornoAPI.status === 204
            ) {
                Alerta({
                    title: 'Cadastro de Genero',
                    text: 'Gênero excluído com sucesso!',
                    icon: 'success',
                    confirmButtonText: 'Fechar'
                })

                await getGeneros()

            }

        } catch (error) {
            Alerta({
                title: 'Cadastro de Genero',
                text: 'Erro ao excluir gênero',
                icon: 'error',
                confirmButtonText: 'Fechar'
            })
        }

    }

    // PREPARAR EDIÇÃO
    const preEditar = (item) => {
        setEditar(true)
        setValor(item.nome)
        setId(item.idGenero)
    }

    // EDITAR GÊNERO
    const editarGenero = async (e) => {

        e.preventDefault()

        if (valor.trim().length === 0) {
            Alerta({
                title: 'Cadastro de Genero',
                text: 'O campo gênero é obrigatório!',
                icon: 'warning',
                confirmButtonText: 'Fechar'
            })

            return
        }

        const objEditar = {
            nome: valor
        }

        try {

            const retornoAPI = await api.put(
                `/Genero/${id}`,
                objEditar
            )

            if (
                retornoAPI.status === 200 ||
                retornoAPI.status === 204
            ) {

                Alerta({
                    title: 'Cadastro de Genero',
                    text: 'Gênero editado com sucesso!',
                    icon: 'success',
                    confirmButtonText: 'Fechar'
                })

                await getGeneros()

                limparDados()
            }

        } catch (error) {

            console.log(error)

            Alerta({
                title: 'Cadastro de Genero',
                text: 'Erro ao editar gênero',
                icon: 'error',
                confirmButtonText: 'Fechar'
            })
        }
    }

    return (

        <>

            <Header />

            <main>

                <Cadastro
                    tituloCadastro="Cadastro de Gênero"
                    visibilidade="none"
                    placeholder="gênero"

                    listaGeneros={listaGeneros}

                    funcCadastro={
                        editar
                            ? editarGenero
                            : cadastrarGenero
                    }

                    valor={valor}
                    setValor={setValor}
                    btnEditar={editar}
                    cancelarEdicao={limparDados}
                />

                <Lista
                    tituloLista="Lista de Gêneros"

                    visibilidade="none"
                    visibilidadeImagem="none"

                    lista={listaGeneros}

                    tipoLista="genero"

                    funcExcluir={excluirGenero}

                    funcEditar={preEditar}
                />

            </main>

            <Footer />

        </>

    )

}

export default CadastroGenero
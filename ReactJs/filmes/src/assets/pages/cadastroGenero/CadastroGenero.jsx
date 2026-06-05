
import "./CadastroGenero.css"
import Header from "../../../components/header/Header"
import Footer from "../../../components/footer/Footer"
import Cadastro from "../../../components/cadastro/Cadastro"
import Lista from "../../../components/lista/Lista"
import Alerta from "../../../components/alerta/Alerta"
import { useEffect, useState } from "react"
import api from "../../../services/Services"
import { Await } from "react-router-dom"
import Swal from 'sweetalert2'

const CadastroGenero = () => {
    //variaveis e states

    const [valor, setValor] = useState("")
    const [listaGeneros, setListaGeneros] = useState([])
    const [editar, setEditar] = useState(false)
    const [id, setId] = useState(0)
    //funçoes e ciclo de vida
    // function cadastrarGenero(e) {
    //     e.preventDefault() // Evita que a página seja recarregada ao enviar o formulário
    //     alert ("Função cadastrar genero em desenvolvimento")
    // }



    // ciclo de vida
    const getGeneros = async () => {
        try {
            const retornoAPI = await api.get("/Genero")
            setListaGeneros(retornoAPI.data)
        } catch (e) {
            Alerta({
                title: 'Erro ao carregar dados da api',
                text: 'Erro ao carregar dados da api, tente novamente!',
                icon: 'warning',
                confirmButtonText: 'Continue'
            })
        }
    }

    //função ciclo de vida para carregar os generos assim que a pagina for carregada
    useEffect(() => {
        getGeneros()
    }, [])

    //função de cadastro de genero 
    const cadastrarGenero = async (e) => {
        e.preventDefault() // Evita que a página seja recarregada ao enviar o formulário

        //Validar o Formulario
        if (valor.trim().length == 0) {
            Alerta(({
                title: 'Informe o nome do gênero',
                text: 'Por favor, informe o nome do gênero',
                icon: 'warning',
                confirmButtonText: 'Continue'
            }))
            // Alerta({
            //     title: 'Informe o nome do gênero',
            //     text: 'Por favor, informe o nome do gênero',
            //     icon: 'warning',
            //     confirmButtonText: 'Continue'
            // })
            return false
        }
        const objCadastro = {
            idGenero: crypto.randomUUID(),
            nome: valor
        }

        try {
            const retorno = await api.post("/Genero", objCadastro)
            // alert("Gênero cadastrado com sucesso!")
            Alerta({
                title: 'Gênero Cadastrado',
                text: `${valor} - Gênero cadastrado com sucesso!`,
                icon: 'success',
                confirmButtonText: 'Continue'
            })
            getGeneros()

            limparFormulario()
        } catch (e) {
            Alerta({
                title: 'Erro ao cadastrar gênero',
                text: 'Erro ao cadastrar gênero, tente novamente!',
                icon: 'error',
                confirmButtonText: 'Continue'
            })
            console.log(e)
        }
    }//fim da função cadastrar Genero

    //função para limpar o formulario e resetar os states relacionados a edição
    const limparFormulario = () => {
        setValor("")
        setEditar(false)
        setId(0) //resetar o id
    }

    //função para excluir um genero, recebe o item que o usuario quer excluir, chama a api para excluir e depois atualiza a lista
    const excluirGenero = async (item) => {
        ///chamar a api.delete(???) e excluir o item da lista
        console.log(item)
        // if (!confirm(`Quer mesmo excluir ${item.nome}?`)) {
        //     return false
        // }

        const result = await Alerta({
            title: "Cadastro de genero",
            text: `Quer mesmo excluir ${item}?`,
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Deletar",
            cancelButtonText: "Cancelar"
        })
        if (!result.isConfirmed) {
            return false
        }

        try {
            const retornoAPI = await api.delete(`/Genero/${item.idGenero}`)
            if (retornoAPI.status == 200 || retornoAPI.status == 204) {
                Alerta({
                    title: 'Gênero Excluído',
                    text: `${item.nome} - Gênero excluído com sucesso!`,
                    icon: 'success',
                    confirmButtonText: 'Continue'
                })
                getGeneros()
            } else {
                Alerta({
                    title: 'Erro ao excluir gênero',
                    text: 'Erro ao excluir gênero!',
                    icon: 'error',
                    confirmButtonText: 'Continue'
                })
            }
        } catch (e) {
            Alerta({
                title: 'Erro ao excluir gênero',
                text: 'Erro ao excluir gênero!',
                icon: 'error',
                confirmButtonText: 'Continue'
            })
            console.log(e)
        }
    }

    //mostra os dados do formulario para o usuario editar, e depois chama a função de editar
    const preEditar = (item) => {
        setValor(item.nome)
        setEditar(true)
        setId(item.idGenero)
    }

    //função para editar um genero, recebe o evento do formulario, valida os dados, chama a api para editar e depois atualiza a lista
    const editarGenero = async (e) => {
        e.preventDefault()//ele para o postar do formulario ou seja o submit
        //validar o formulario
        if (valor.trim().length == 0) {
            Alerta({
                title: 'Informe o nome do gênero',
                text: 'Por favor, informe o nome do gênero',
                icon: 'warning',
                confirmButtonText: 'Continue'
            })
            return false
        }

        // atualiza o objeto pra API
        const objEditar = {
            idGenero: id,
            nome: valor,
        }

        try {
            // editar na api
            const retornoAPI = await api.put(`/Genero/${id}`, objEditar)
            // atualizar lista
            getGeneros()
            //alerta de sucesso
            Alerta({
                title: 'Edição de Gênero',
                text: `${valor} - Gênero editado com sucesso!`,
                icon: 'success',
                confirmButtonText: 'Continue'
            })
            // limpar formulario
            limparFormulario()

        } catch (e) {
            Alerta({
                title: 'Erro ao editar gênero',
                text: 'Erro ao editar gênero!',
                icon: 'error',
                confirmButtonText: 'Continue'
            })
            console.log(e)
        }
    }


    // O jsx em si (XHML HTML)
    return (
        <>
            <Header />
            <main>
                <Cadastro
                    tituloCadastro="Cadastro de Gênero"
                    placeholder="gênero"

                    visibilidade="none"
                    visibilidadeImagem="none"

                    funcCadastro={
                        editar
                            ? editarGenero
                            : cadastrarGenero
                    }

                    valor={valor}
                    setValor={setValor}

                    btnEditar={editar}

                    cancelarEdicao={limparFormulario}
                />
                <Lista
                    tituloLista="Lista de Gêneros"
                    lista={listaGeneros}
                    tipoLista="genero"
                    visibilidade="none"
                    visibilidadeImagem="none"
                    funcExcluir={excluirGenero}
                    funcEditar={preEditar}
                />
            </main>
            <Footer />
        </>
    )
}
export default CadastroGenero
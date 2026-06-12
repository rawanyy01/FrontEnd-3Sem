import Botao from "../../components/botao/Botao"
import Logo from "../../assets/img/logo.svg"
import "./Login.css"
import { useContext, useState } from "react"
import { UsuarioContext } from "../../context/UsuarioContext"
import { useNavigate } from "react-router-dom"
import api from "../../Services/services"
import { jwtDecode } from "jwt-decode"

const Login = () => {

    const { setUsuario } = useContext(UsuarioContext)

    const navigate = useNavigate()

    const [email, setEmail] = useState("")
    const [senha, setSenha] = useState("")

    const logar = async (e) => {
        e.preventDefault()

        try {

            const resposta = await api.post("/Login", {
                email,
                senha
            })

            console.log("LOGIN OK")
            console.log("RESPOSTA:", resposta.data)

            const token = resposta.data.token;

            //const usuarioDecode = jwtDecode(token)
            //console.log(usuarioDecode)

            localStorage.setItem("token", token);

            setUsuario(true);

            navigate("/filmes");

        } catch (erro) {

            console.log("ERRO:", erro)

            console.log("STATUS:", erro.response?.status)

            console.log("DADOS:", erro.response?.data)

            if (erro.response?.status === 404) {
                alert("Email ou senha inválidos!")
            } else {
                alert("Erro ao conectar com a API!")
            }
        }
    }

    return (
        <main className="main_login">
            <div className="banner"></div>

            <section className="section_login">

                <img src={Logo} alt="Logo do Filmoteca" />

                <form className="form_login" onSubmit={logar}>

                    <h1>Login</h1>

                    <div className="campos_login">

                        <div className="campo_input">

                            <label>Email:</label>

                            <input
                                type="email"
                                placeholder="Digite seu e-mail"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />

                        </div>

                        <div className="campo_input">

                            <label>Senha:</label>

                            <input
                                type="password"
                                placeholder="Digite sua senha"
                                value={senha}
                                onChange={(e) => setSenha(e.target.value)}
                            />

                        </div>

                    </div>

                    <Botao nomeDoBotao="Entrar" />

                </form>

            </section>

        </main>
    )
}

export default Login
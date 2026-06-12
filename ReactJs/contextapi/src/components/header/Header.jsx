import { useContext } from "react"
import { Link } from "react-router-dom"
import { UsuarioContext } from "../../context/UsuarioContext"
const Header = () => {

    const { usuario, setUsuario } = useContext(UsuarioContext)

    const logout = () => {
        setUsuario(null)
        localStorage.removeItem("usuario")
    }

    return (
        <header>
            <h1>My App</h1>
            <nav>
                <Link to={"/"}>Home | </Link>{""}
                <Link to={"/perfil"}>Perfil | </Link>{""}
                <Link to={"/mypage"}>My Page | </Link>{""}
                <Link to={"/cadProduto"}>Cadastro Produto</Link>{""}
                <span>( {usuario} )</span>
                <button
                    onClick={
                        () => {
                            logout()
                        }}
                >sair</button>
            </nav>
        </header>
    )
}

export default Header
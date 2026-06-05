import { useContext } from "react"
import { UsuarioContext } from "../../context/UsuarioContext"

const MyPage = () => {

    const {usuario} = useContext(UsuarioContext)

    return(
        <div>
        <h2>Minha Página</h2>
        <p>Dados do usuario: {usuario}</p>
        </div>
    )
}

export default MyPage
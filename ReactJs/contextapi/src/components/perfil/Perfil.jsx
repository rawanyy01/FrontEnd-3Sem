import { useContext, useState } from "react"
import { UsuarioContext } from "../../context/UsuarioContext"

const Perfil = () => {

    //state global
    const {usuario, setUsuario } = useContext(UsuarioContext);
    //stsate local
    const [novoUsuario, setNovoUsuario] = useState("")
    return(
        <>
        <h2>Perfil do usuario</h2>
        <span>Usuario: {usuario}</span>
        <p>
            <input 
            type="text" 
            placeholder="Novo usúario"
            value={novoUsuario}
            onChange={(e) => {
                setNovoUsuario(e.target.value)
            }}
            />
          <button onClick={
            () => {
                setUsuario(novoUsuario)
            }
          }>Alterar Usúario</button>
        </p>
        </>
    );
};

export default Perfil
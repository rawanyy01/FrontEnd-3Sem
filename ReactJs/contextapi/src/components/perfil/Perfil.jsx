import { useContext, useState } from "react"
import { UsuarioContext } from "../../context/UsuarioContext"

const Perfil = () => {
   const { usuario, setUsuario } = useContext(UsuarioContext);//pegar o dado e colocar no stronge
   const [novoUsuario, setNovoUsuario] = useState("")

   const login = () => {

      setUsuario(novoUsuario);
      localStorage.setItem("usuario", JSON.stringify(novoUsuario));
      setNovoUsuario("");

   };


   return (
      <>
         <h2>Perfil do Usuario</h2>
         <span>Usuario: {usuario}</span>
         <p>
            <input
               type="text"
               placeholder="Novo usuario"
               value={novoUsuario}
               onChange={(e) => {
                  setNovoUsuario(e.target.value)
               }}
            />

            <button onClick={
               () => {
                  login(); 
               }}
            >Entrar</button>
         </p>
      </>
   )
}

export default Perfil
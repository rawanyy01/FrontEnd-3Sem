import { useState } from "react"

function FormularioState() {
    const [nome, setNome] = useState("")
    const [sobrenome, setSobrenome] = useState("")

    function pegarSobrenome(evento) {
        setSobrenome(evento.target.value)
    }

    return (
    <div>
        <h2>Formulario com  State</h2>
        <label htmlFor="nome">Nome</label>
        <br />
        <input 
           type="text" 
           placeholder="Digite seu nome"
           onChange={(evento) => {
            //evento - evento capturado/disparado, no caso o change
            //target - elemento que disparou o evento, no caso o input
            //value - oras,o value do input, no caso o valor digitado
              setNome(evento.target.value)
            }}
           />
           <br />
            <label htmlFor="sobrenome">sobrenome</label>
            <br />
           <input 
           type="text" 
           placeholder="Digite seu sobrenome"
           onChange={pegarSobrenome}
           />
           
           <br />
           <label htmlFor="">Texto digitado: <strong>{nome} {sobrenome}</strong></label>
      </div>
    )
}

export default FormularioState
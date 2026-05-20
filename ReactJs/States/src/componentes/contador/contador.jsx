import { useState } from "react"

function Contador(params) {

   //variaveis e states
   //funcoes

   const [contador, setContador] = useState(0)
   
   function incrementar(params) {
     setContador(contador + 1)
       if(contador == 10)
        setContador(0)
   }
   function decrementar(params) {
    if (contador > 0) {
       setContador(contador - 1)
       
    } else {
        setContador(0)
    }
   
     
   }
   
     

    return (
        <div className="contador">
            <h1 className="contador__title">Contador {contador}</h1>
            <button onClick={incrementar}>Contar ++</button>
            <button onClick={decrementar}>Contar --</button>
            
        </div>  
    )
}

export default Contador
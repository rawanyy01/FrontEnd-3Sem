import { useState } from 'react'
import './App.css'
import Contador from './componentes/contador/contador';
import FormularioState from './componentes/formulariostates/formulario';
import CadFruta from './componentes/cadfruta/cadfruta';


function App() {
  const [titulo, setTitulo] = useState("Google");

  function mudarTexto() {
    setTitulo("Microsoft")
  }

  function mudarTexto2() {
    setTitulo("Adenicon")
  }

  return (
    <>
    {/* <h1>Minha Página de {titulo}</h1>
    <button onClick={mudarTexto}>Mudar Texto</button>
    <br />
    <button onClick={mudarTexto2}>Adenicon</button>

    <Contador />
    <br />

    <FormularioState/> */}

    <CadFruta/>
    </>
    
    
  )
}

export default App

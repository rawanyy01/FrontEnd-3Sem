import { BrowserRouter, Route, Routes } from "react-router-dom"
import Login from "../assets/pages/login/Login";
import CadastroFilme from "../assets/pages/cadastroFilmes/CadastroFilme";
import CadastroGenero from "../assets/pages/CadastroGenero/cadastroGenero";

const Rotas = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Login />}/>
                <Route path="/filmes" element={<CadastroFilme />}/>
                <Route path="/generos" element={<CadastroGenero />}/>
            </Routes>
        </BrowserRouter>
    )
}

export default Rotas;
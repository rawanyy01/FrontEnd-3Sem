import { BrowserRouter, Route, Routes } from "react-router-dom"
import Login from "../pages/login/Login";
import CadastroGenero from "../pages/cadastroGenero/CadastroGenero";
import CadastroFilmes from "../pages/cadastroFilmes/CadastroFilme";
import PrivateRoute from "./PrivateRoute";

const Rotas = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/filmes" element={<CadastroFilmes />} />
        <Route
          path="/generos"
          element={
            <PrivateRoute>
              <CadastroGenero />
            </PrivateRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};


export default Rotas;
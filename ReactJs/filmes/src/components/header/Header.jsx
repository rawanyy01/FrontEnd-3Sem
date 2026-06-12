import "./Header.css";
import Logo from "../../assets/img/logo.svg"
import { Link, useNavigate } from "react-router-dom";
import PrivateRoute from "../../routes/PrivateRoute";
import { useContext } from "react";
import { UsuarioContext } from "../../context/UsuarioContext";

const Header = () => {

    const { setUsuario } = useContext(UsuarioContext)

    const navigate = useNavigate()

    const logout = () => {

        localStorage.removeItem("token");

        setUsuario(false);

        navigate("/");
    };

    return (
        <PrivateRoute>
            <header>
                <div className="layout_grid cabecalho">

                    <Link to="/filmes">
                        <img src={Logo} alt="Logo do Filmoteca" />
                    </Link>

                    <nav className="nav_header">
                        <Link className="link_header" to="/filmes">
                            Filme
                        </Link>

                        <Link className="link_header" to="/generos">
                            Gênero
                        </Link>

                        <button
                            className="btn_logout"
                            onClick={logout}
                        >
                            Sair
                        </button>

                    </nav>

                </div>
            </header>
        </PrivateRoute>
    )
}

export default Header;
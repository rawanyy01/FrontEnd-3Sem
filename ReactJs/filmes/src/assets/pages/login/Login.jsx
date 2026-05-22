import Header from "../../../components/header/Header";
import "./Login.css"
import { Link } from "react-router-dom";
import Footer from "../../../components/footer/Footer";

const Login = () => {
    return (
        <>
            <Header />
            <h1>Login</h1>
            <Link to="/generos">Gêneros</Link>
        </>
    )
}

export default Login;
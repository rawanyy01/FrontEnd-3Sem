import { Link } from 'react-router-dom'
import './header.css'

export default function Header() {
    return(
        <nav className='navbar'>
            <Link to="/">Home</Link>
            <Link to="/quemsomos">Quem Somos</Link>
            <Link to="/fruta">Cadastro Fruta</Link>
            <Link to="/produto">Cadastro Produto</Link>
        </nav>
    )
}
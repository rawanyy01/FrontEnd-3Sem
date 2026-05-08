import "./Menu.css";
import CardPerfil from "../cardperfil/cardperfil";

function Menu(){
  return(
    

    <nav class="menu">
        <a href="#" className="menu__item">Home</a>
        <a href="#" className="menu__item">Quem somos</a>
        <a href="#" className="menu__item">Contatos</a>
        <a href="#" className="menu__item menu__item--signin">Entrar</a>
        <a href="#" className="menu__item menu__item--signup">Cadastrar</a>

      <CardPerfil/>

    </nav>

    

  );
}

export default Menu;
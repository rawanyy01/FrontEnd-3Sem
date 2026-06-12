import { useContext, useState } from "react";
import {ProdutoContext} from "../../context/ProdutoContext";
import ListarProduto from "../listarproduto/ListarProduto";

const CadastroProduto = () => {
  const [nome, setNome] = useState("");
  const { adicionarProduto } = useContext(ProdutoContext);

  const cadastrar = (e) => {
    e.preventDefault();

    if (!nome.trim()) return;

    adicionarProduto(nome);
    setNome("");
  };

  return (
    <div>
      <h2>Cadastro de Produto</h2>

      <form onSubmit={cadastrar}> 
        <input
          type="text"
          placeholder="Nome do produto"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
        />

        <button type="submit">Cadastrar</button>
      </form>

      <ListarProduto/>
    </div>
  );
};

export default CadastroProduto;
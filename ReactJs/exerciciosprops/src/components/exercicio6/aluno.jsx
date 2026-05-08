import "./Aluno.css"


function Aluno({ nome, curso, imagem }) {
    return(
        <div className="aluno-card">
            <img src={imagem} alt={nome} className="aluno-img" />

            <h2>{nome}</h2>

            <p>{curso}</p>
        </div>
    );
}

export default Aluno


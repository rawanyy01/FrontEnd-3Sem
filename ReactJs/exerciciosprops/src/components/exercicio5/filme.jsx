import "./filme.css"

function Filme({titulo, ano, genero, nota}) {
    return <h2>Titulo do filme: {titulo} - Ano do filme:{ano} - Genero do filme:{genero} - Nota do filme:{nota}</h2>
}

export default Filme
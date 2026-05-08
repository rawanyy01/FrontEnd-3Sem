import "./title.css"

function Title({texto, sobrenome, idade}){
    return <h1>{texto}  {sobrenome} - {idade}</h1>
}

export default Title
import { useState } from "react"
import "./cadfruta.css"

export default function CadFruta() {
    const [fruta, setFruta] = useState("")
    const [Quantidade, setQuantidade] = useState("")

    const [arrFrutas, setArrFrutas] = useState([
        { id: 1, nome: "Abacaxi", quantidade: 10 },
        { id: 2, nome: "Moranguete ", quantidade: 10 }
    ])


    function cadastrar(e) {
        e.preventDefault()
        setArrFrutas([...arrFrutas,
             { id: Date.now(), 
               nome: fruta,
               quantidade: Quantidade 
            }])

        limparCadastro()
    }

    function limparCadastro() {
        setFruta("")
        setQuantidade(0)
    }


    return (
        <section className="sessao-cadastro">
            <h2>Cadastro</h2>

            <form action="" onSubmit={cadastrar}>
                <fieldset className="cadastro">
                    <label htmlFor="fruta" className="cadastro__rotulo">
                        Digite o nome da fruta:
                    </label>
                    <br />

                </fieldset>

                <input
                    type="text"
                    id="fruta"
                    value={fruta}
                    placeholder="ex: limão"
                    className="cadastro__entrada"
                    onChange={(e) => {
                        setFruta(e.target.value)
                    }}
                />

                <input
                    type="number"
                    id="quantidade"
                    value={Quantidade   }
                    placeholder="ex: 5"
                    className="cadastro__quantidade"
                    onChange={(e) => {
                        setQuantidade(e.target.value)
                    }}
                />
                <br />
                <button type="submit" className="cadastro__btncadastrar">Cadastrar</button>
            </form>

            <div className="resultado">
                <ul>
                    {
                        arrFrutas.map((f) => {
                            return <li key={f.id}>
                                Fruta: <strong>{f.nome}</strong> |
                                Quantidade: <strong>{f.quantidade}</strong>
                            </li>
                        })
                    }

                </ul>
            </div>
        </section>

    )
}
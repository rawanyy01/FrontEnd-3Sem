async function cadastrarContato(objetoContato) {
    console.log(objetoContato);

    //cadastrar na API
    let resposta = await fetch("http://localhost:3000/contatos", {
        method: "POST",
        body: JSON.stringify(objetoContato),
        headers: {
            "Content-Type": "application/json; charset=UTF-8"
        }
    });
}


function validarFormulario() {
    let nome = document.getElementById("nome").value.trim(); //pega o valor do campo com o id "nome"
    let sobrenome = document.getElementById("sobrenome").value.trim();
    // let email = document.getElementById("email").value.trim();
    // let telInfo = document.getElementById("telInfo").value.trim();
    // let DDD = document.getElementById("DDD").value.trim();
    // let telefone = document.getElementById("telefone").value.trim();
    // let cep = document.getElementById("cep").value.trim();
    // let rua = document.getElementById("rua").value.trim();
    // let numero = document.getElementById("numero").value.trim();
    // let apto = document.getElementById("apto").value.trim();
    // let bairro = document.getElementById("bairro").value.trim();
    // let cidade = document.getElementById("cidade").value.trim();
    // let estado = document.getElementById("estado").value.trim();
    // let anotacoes = document.getElementById("anotacoes").value.trim();

    let quantidadeErros = 0; //variável para contar a quantidade de erros



    if (nome == "") { //verifica se algum dos campos está vazio
        formError("nome"); //coloca o foco no campo "nome"
        quantidadeErros++; //incrementa a quantidade de erros
    } else {
        reiniciaBorda("nome"); //reinicia a borda do campo "nome" para o estilo original
    }


    if (sobrenome == "") { //verifica se algum dos campos está vazio
        formError("sobrenome"); //coloca o foco no campo "sobrenome"
        quantidadeErros++; //incrementa a quantidade de erros
    } else {
        reiniciaBorda("sobrenome"); //reinicia a borda do campo "sobrenome" para o estilo original
    }


    // if (email == "") { //verifica se algum dos campos está vazio
    //     formError("email"); //coloca o foco no campo "email"
    //     quantidadeErros++;
    // } else {
    //     reiniciaBorda("email"); //reinicia a borda do campo "email" para o estilo original
    // }

    // if (telInfo == "") { //verifica se algum dos campos está vazio
    //     formError("telInfo"); //coloca o foco no campo "telInfo"
    //     quantidadeErros++;
    // } else {
    //     reiniciaBorda("telInfo"); //reinicia a borda do campo "telInfo" para o estilo original
    // }

    // if (DDD == "") { //verifica se algum dos campos está vazio
    //     formError("DDD"); //coloca o foco no campo "DDD"
    //     quantidadeErros++;
    // } else {
    //     reiniciaBorda("DDD"); //reinicia a borda do campo "DDD" para o estilo original
    // }

    // if (telefone == "") { //verifica se algum dos campos está vazio
    //     formError("telefone"); //coloca o foco no campo "telefone"
    //     quantidadeErros++;
    // } else {
    //     reiniciaBorda("telefone"); //reinicia a borda do campo "telefone" para o estilo original
    // }

    // if (cep == "") { //verifica se algum dos campos está vazio
    //     formError("cep"); //coloca o foco no campo "cep"
    //     quantidadeErros++;
    // } else {
    //     reiniciaBorda("cep"); //reinicia a borda do campo "cep" para o estilo original
    // }

    // if (rua == "") { //verifica se algum dos campos está vazio
    //     formError("rua"); //coloca o foco no campo "rua"
    //     quantidadeErros++;
    // } else {
    //     reiniciaBorda("rua"); //reinicia a borda do campo "rua" para o estilo original
    // }

    // if (numero == "") { //verifica se algum dos campos está vazio
    //     formError("numero"); //coloca o foco no campo "numero"
    //     quantidadeErros++;
    // } else {
    //     reiniciaBorda("numero"); //reinicia a borda do campo "numero" para o estilo original
    // }

    // if (apto == "") { //verifica se algum dos campos está vazio
    //     formError("apto"); //coloca o foco no campo "apto"
    //     quantidadeErros++;
    // } else {
    //     reiniciaBorda("apto"); //reinicia a borda do campo "apto" para o estilo original
    // }

    // if (bairro == "") { //verifica se algum dos campos está vazio
    //     formError("bairro"); //coloca o foco no campo "bairro"
    //     quantidadeErros++;
    // } else {
    //     reiniciaBorda("bairro"); //reinicia a borda do campo "bairro" para o estilo original
    // }

    // if (cidade == "") { //verifica se algum dos campos está vazio
    //     formError("cidade"); //coloca o foco no campo "cidade"
    //     quantidadeErros++;
    // } else {
    //     reiniciaBorda("cidade"); //reinicia a borda do campo "cidade" para o estilo original
    // }

    // if (estado == "") { //verifica se algum dos campos está vazio
    //     formError("estado"); //coloca o foco no campo "estado"
    //     quantidadeErros++;
    // } else {
    //     reiniciaBorda("estado"); //reinicia a borda do campo "estado" para o estilo original
    // }

    // if (anotacoes == "") { //verifica se algum dos campos está vazio
    //     formError("anotacoes"); //coloca o foco no campo "anotacoes"
    //     quantidadeErros++;
    // } else {
    //     reiniciaBorda("anotacoes"); //reinicia a borda do campo "anotacoes" para o estilo original
    // }

    if (quantidadeErros > 0) {//verifica se a quantidade de erros é maior que 0
        alert("Existem " + quantidadeErros + " campos obrigatórios não preenchidos."); //exibe um alerta para o usuário
        quantidadeErros = 0; //reinicia a quantidade de erros para 0
    } 

    //literal template: é a crase `` e não as aspas "" ou ''
    // console.log(
    // `Aluno: ${nome} ${sobrenome}
    //  Email: ${email}`)
    // ; 


    //cadastrar la na api
    //gerar um objeto com os dados do formulário
    let objetoContato = {
        nome: nome,
        sobrenome: sobrenome
    };
    
    let cadastrado = cadastrarContato( objetoContato);
    return false; //impede o envio do formulário para evitar recarregar a página



}//fim da função


//funcao que pinta o campo de vermelho quando o campo estiver vazio

function formError(fieldId) {
    document.getElementById(fieldId).style.border = "1px solid red";
}

function reiniciaBorda(fieldId) {
    document.getElementById(fieldId).style.border = "none";
}

async function buscarEndereco() {
    let cep = document.getElementById("cep").value.trim();

    if (cep.length !== 8) {
        alert("CEP inválido. Digite exatamente 8 números.");
        return;
    }

    try {

        aguardandoCampos();

        let resposta = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
        let dados = await resposta.json();

        if (dados.erro) {
            alert("CEP não encontrado.");
            return;
        }

        // Preenchendo os campos automaticamente
        document.getElementById("rua").value = dados.logradouro;
        document.getElementById("bairro").value = dados.bairro;
        document.getElementById("cidade").value = dados.localidade;
        document.getElementById("estado").value = dados.uf;

    } catch (erro) {
        console.error(erro);
        alert("Erro ao buscar endereço.");
    }
}

function aguardandoCampos() {
    document.getElementById("rua").value = "Aguardando...";
    document.getElementById("bairro").value = "Aguardando...";
    document.getElementById("cidade").value = "Aguardando...";
    document.getElementById("estado").value = "Aguardando...";
}
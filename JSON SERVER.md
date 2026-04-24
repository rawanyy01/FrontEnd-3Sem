**JSON SERVER**



\- Facilita o desenvolvimento front criando um servidor

\- cria uma api falsa(API RESET)

\- utiliza um arquivo db.json



**COMO INSTALAR, RODAR E UTILIZAR?**



&#x20;- Abrir o terminal, pode ser no vsCode e rode o comando:

**npm install -g json-server**

&#x20;*(com a flag/parâmetro -g v instala o json server de forma global e não precisara mais instalar para os outros projetos)*



\*\*-\*\*Criar um arquivo **db.json**(esse arquivo serve como um banco de dadosgerenciadfo pelo proprio json-server)



Exemplo Estrutura:

{

&#x20;   "rota/Endpoin?":\[

&#x20;     {"id" : 1, "dado-qualquer" : "valor-qualquer"}

&#x20; ]

}





Exemplo Fictício:

{

&#x20;   "usuarios":\[

&#x20;     {"id" : 1, "nome" : "rawany", "Email" : "rawany@gamil.com", "idade" : "16"}

&#x20;     {"id" : 2, "nome" : "Anne", "Email" : "Anne@gamil.com", "idade" : "18"}

&#x20; ]

}





\-no VSCode devemos abrir o terminal e alterar para o terminal do gitbash

rodar o comando  **npx** **json-server --watch db.json**

**e ta pronto!**





Entrar no postman,

Criar as requisiçoes:

&#x20;cadastar usuario(POST)

&#x20;listar Usuarios(GET)

&#x20;listar um usuario(GET)

&#x20;editar usuario(PUT)

&#x20;apagar usuario(DELETE)


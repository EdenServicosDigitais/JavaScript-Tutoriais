
// Criando o prompt
let tarefa = prompt("Digite a tarefa:")

//Criando elementos HTML
let list = document.createElement("li")
let texto = document.createTextNode(tarefa)

//Adicionando aos componentes
list.appendChild(texto)
document.getElementById("lista").appendChild(list)


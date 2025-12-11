function adicionar() {
const input = document.getElementById("produto");
const nome = input.value.trim();


if (nome === "") return;


const lista = document.getElementById("lista");


const li = document.createElement("li");
li.innerHTML = `${nome} <button onclick="remover(this)">x</button>`;


lista.appendChild(li);


input.value = "";
}


function remover(botao) {
const li = botao.parentElement;
li.remove();
}

function editar(botao) {
    const li = botao.parentElement;
    const texto = li.querySelector("span");
    const novo = prompt("editar:", texto.textContent);
    if (novo) texto.textContent = novo;
}

function limparTudo() {
document.getElementById("lista").innerHTML = "";
}

var dados = JSON.parse(localStorage.getItem("chave"));

document.getElementById("dadosnome").value = dados.email;

function carregarDados() {
  // Exibindo dados em um campo de input
  document.getElementById("dadosnome").value = dados.nome;
  document.getElementById("dadosemail").value = dados.email;
  document.getElementById("dadospassword").value = dados.senha;
  document.getElementById("dadosprogresso").value = dados.prog;
  document.getElementById("dadosdata").value = dados.data;
}

// Função para habilitar edição dos campos
document.getElementById("mybutton").addEventListener("click", function () {
  dados.prog = getElementById.prog.value;
  if(dados.prog < 1 || dados.prog !=0, 0.333 + dados.prog);
  else("");
});

const salve = document.querySelector("#salvar") 

if (salve) {
    salve.addEventListener("click", () => salvar())
}
function salvar() {
    dados.nome = document.getElementById("dadosnome").value;
    dados.email = document.getElementById("dadosemail").value;
    dados.senha = document.getElementById("dadospassword").value;
    console.log(dados)
    document.getElementById("dadosprogresso").value;
    document.getElementById("dadosdata").value;

    localStorage.setItem("chave", JSON.stringify(dados));
}


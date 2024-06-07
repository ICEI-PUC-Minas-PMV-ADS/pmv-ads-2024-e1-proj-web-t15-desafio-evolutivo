var dados = JSON.parse(localStorage.getItem("chave"));

document.getElementById("dadosnome").value = dados.email;

function carregarDados() {
  // Exibindo dados em um campo de input
  document.getElementById("dadosnome").value = dados.nome;
  document.getElementById("dadosemail").value = dados.email;
  document.getElementById("dadospassword").value = dados.senha;
}

// Função para habilitar edição dos campos
document.getElementById("editar").addEventListener("click", function () {
  // Habilitar todos os campos de entrada
  const inputs = document.querySelectorAll("#dados-form input");
  inputs.forEach((input) => (input.disabled = false));

  // Esconder o botão de editar e mostrar o botão de salvar
  document.getElementById("editar").style.display = "none";
  document.getElementById("salvar").style.display = "inline";

  document.getElementById("salvar").addEventListener("click", function () {
    // Quando o botão 'salvar' for clicado, esconda-o e mostre o botão 'editar'
    const inputs = document.querySelectorAll("#dados-form input");
    inputs.forEach((input) => (input.disabled = true));
    document.getElementById("salvar").style.display = "none";
    document.getElementById("editar").style.display = "inline";
  });
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

    localStorage.setItem("chave", JSON.stringify(dados));
}

// Função para mostrar a foto de perfil
function mostrarFotodePerfil() {
  const input = document.getElementById("foto-input");
  const output = document.getElementById("conteudo-principal-perfil-anon");

  input.onchange = function (e) {
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.onload = function (event) {
      output.src = event.target.result;
      output.style.width = "250px";
      output.style.height = "250px";
      localStorage.setItem("profilepic", event.target.result);
      const avatar = document.querySelector(".cabecalho-avatar");
      avatar.src = localStorage.getItem("profilepic");
    };

    reader.readAsDataURL(file);
  };

  input.click();
}

// Função para carregar a imagem de perfil do local storage
function carregarImagemDePerfil() {
  const fotosalva = localStorage.getItem("profilepic");

  if (fotosalva) {
    const avatar = document.querySelector(".cabecalho-avatar");
    avatar.src = fotosalva;
    const perfil = document.querySelector("#conteudo-principal-perfil-anon");
    perfil.src = fotosalva;
    document.getElementById("botao-imagem").innerText = "Trocar imagem";
  }
}

// função que envia dados (email e nome) automaticamente para servidor guardar e 
// utilizar para enviar emails
function enviarDados() {
  // Obter dados do localStorage
  const dados = JSON.parse(localStorage.getItem('chave'));

  if (dados) {
      // Enviar dados para o servidor por meio de uma requisição AJAX
      const xhr = new XMLHttpRequest();
      xhr.open('POST', 'http://127.0.0.1:3000/receber-dados');
      xhr.setRequestHeader('Content-Type', 'application/json');
      xhr.onload = function() {
          if (xhr.status === 200) {
              console.log('Dados enviados com sucesso!');
          } else {
              console.error('Erro ao enviar dados:', xhr.statusText);
          }
      };
      xhr.onerror = function() {
          console.error('Erro ao enviar dados:', xhr.statusText);
      };
      xhr.send(JSON.stringify(dados));
  } else {
      console.error('Dados não encontrados no localStorage.');
  }
}
// Carregar dados do local storage e imagem de perfil quando a página é carregada
window.onload = function () {
  carregarImagemDePerfil();
  carregarDados();
  enviarDados();
};

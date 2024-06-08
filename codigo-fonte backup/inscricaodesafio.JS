$(document).ready(function() {
  $('#my-button').click(function() {
    $('#popup-modal').fadeIn();
  });
  
  $('#ok-button').click(function() {
    window.location.href = "https://www.example.com/new-page";
  });
  
  $('#cancel-button').click(function() {
    window.location.href = "Desafio dia 1/Desafio dia 1.HTML";
  });

});
  // Função para carregar a imagem de perfil do local storage
  function carregarImagemDePerfil() {
    const fotosalva = localStorage.getItem("profilepic");
  
    if (fotosalva) {
      const avatar = document.querySelector(".cabecalho-avatar");
      avatar.src = fotosalva;
       }
  }

function enviarDados() {
  // Obter dados do localStorage
  const dados = JSON.parse(localStorage.getItem('chave'));
  let lastChallengeDate = localStorage.getItem('lastChallengeDate') || '';
  
  const today = new Date().toLocaleDateString('pt-br'); 
  
  if (dados && today !== lastChallengeDate) {
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
};

  // Carregar dados do local storage e imagem de perfil quando a página é carregada
  window.onload = function () {
    carregarImagemDePerfil();
    enviarDados();
  };

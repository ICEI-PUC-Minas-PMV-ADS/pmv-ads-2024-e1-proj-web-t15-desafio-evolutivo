//declarando as variáveis para usar em tudo
var contador = parseInt(localStorage.getItem('contador')) || 0; //alterar esse número para forçar teste
var lastChallengeDate = localStorage.getItem('lastChallengeDate') || '';
var today = new Date().toISOString().split('T')[0]; // Formato YYYY-MM-DD    
  
$(document).ready(function() {
  $('#my-button').click(function() {
    if (lastChallengeDate !== today) {
    $('#popup-modal').fadeIn();0
    $(this).hide(); // Esconde o botão "Iniciar"
  } else {
    alert('Você já fez seu desafio hoje! Volte amanhã!');
  }});

  $('#ok-button').click(function() {
    window.location.href = "segundodia.html";
  });
  
  $('#cancel-button').click(function() {
    window.location.href = "trigesimodia.html";
  });
});

document.addEventListener('DOMContentLoaded', (event) => {

  // Atualiza o contador se o botão for clicado
  document.getElementById('cancel-button').addEventListener('click', () => {
      // Verifica se o desafio já foi feito hoje
      let contador = parseInt(localStorage.getItem('contador')) || 0; //alterar esse número para forçar teste
      let lastChallengeDate = localStorage.getItem('lastChallengeDate') || '';
      let today = new Date().toISOString().split('T')[0]; // Formato YYYY-MM-DD

      if (today !== lastChallengeDate && contador < 30) {
          contador = Math.min(contador + 1); // Incrementa o contador

          if  ( today !== lastChallengeDate){
            alert("Parabéns pela conclusão da tarefa!");
            window.location.href = "trigesimodia.html";}
          lastChallengeDate = today;
          // Atualiza o contador e a data do último desafio no localStorage
          localStorage.setItem('contador', contador);
          localStorage.setItem('lastChallengeDate', lastChallengeDate);
          
          // Vitória no desafio
          if (contador >= 30) {
              alert('Parabéns! Você venceu o desafio!');
          } 
      }
      else {
          alert('Você já completou o desafio de hoje!');
      }  
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

// Carregar dados do local storage e imagem de perfil quando a página é carregada
window.onload = function () {
  carregarImagemDePerfil();
  
};
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
    window.location.href = "";
  });
  
  $('cancel-button').click(function() {
  });

});
document.addEventListener('DOMContentLoaded', (event) => {
  // Recupera o contador e a data do último desafio do localStorage
  let contador = parseInt(localStorage.getItem('contador')) || 29; //alterar esse número para forçar teste
  let lastChallengeDate = localStorage.getItem('lastChallengeDate') || '';
  
  // Exibe o contador atual na página
 
  // Atualiza o contador se o botão for clicado
  document.getElementById('cancel-button').addEventListener('click', () => {
       const data = new Date().toLocaleString("sv-SE", { timeZone: "America/Sao_Paulo" });
       const today = data.split(' ')[0]; 
    
      // Verifica se o desafio já foi feito hoje
      if (today !== lastChallengeDate && contador < 30) {
          contador = Math.min(contador + 1); // Incrementa o contador
          lastChallengeDate = today;
          // Atualiza o contador e a data do último desafio no localStorage
          localStorage.setItem('contador', contador);
          localStorage.setItem('lastChallengeDate', lastChallengeDate);
      
          // Vitória no desafio
          //if (contador >= 30) {
              alert('Parabéns! Você venceu o desafio! Agora avalie sua experiência.');
              localStorage.removeItem('lastChallengeDate', lastChallengeDate);
              localStorage.removeItem('contador', contador);
              
              window.location.href = "avaliacoes.html";
          //} 
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

$(document).ready(function() {
  $('#my-button').click(function() {
    $('#popup-modal').fadeIn();
    $(this).hide(); // Esconde o botão "Iniciar"
  });
  
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
  // document.getElementById('contador').textContent = `${contador}/30`;
  // Atualiza o contador se o botão for clicado
  document.getElementById('cancel-button').addEventListener('click', () => {
      const today = new Date().toISOString().split('T')[0]; // Formato YYYY-MM-DD               
      
      // Verifica se o desafio já foi feito hoje
      if (today !== lastChallengeDate && contador < 30) {
          contador = Math.min(contador + 1); // Incrementa o contador
          lastChallengeDate = today;
          // Atualiza o contador e a data do último desafio no localStorage
          localStorage.setItem('contador', contador);
          localStorage.setItem('lastChallengeDate', lastChallengeDate);
          // Atualiza o contador na página
          // document.getElementById('contador').textContent = `${contador}/30`;
          
          // Vitória no desafio
          if (contador >= 30) {
              alert('Parabéns! Você venceu o desafio! Agora avalie sua experiência.');
              window.location.href = "avaliacoes.html";
          } 
      }
      else {
          alert('Você já completou o desafio de hoje!');
      }
      //A pessoa pulou um dia e perdeu o desafio
      //if (today !== lastChallengeDate && yesterday !== lastChallengeDate && chancedevacilo == 1) {
      //    alert('Que vacilo! Você falhou no desafio. Mas não se preocupe, você terá uma chance!');
      //    contador = Math.min(contador + 1);
      //   chancedevacilo = chancedevacilo - 1;
      //    lastChallengeDate = today;
      //}
      //else if (today !== lastChallengeDate && yesterday !== lastChallengeDate && chancedevacilo == 0) {
      //   alert('Volte ao início do desafio! Tente novamente, você irá conseguir!');
      //    contador = 0;
      //}
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
// Selecionando o elemento
// Selecionando o elemento

// Carregar dados do local storage e imagem de perfil quando a página é carregada
window.onload = function () {
  carregarImagemDePerfil();
  
};
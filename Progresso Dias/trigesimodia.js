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

  document.addEventListener('DOMContentLoaded', (event) => {
      // Recupera o contador e a data do último desafio do localStorage
      let contador = parseInt(localStorage.getItem('contador')) || 29; //alterar esse número para forçar teste
      let lastChallengeDate = localStorage.getItem('lastChallengeDate') || '';
      
      // Exibe o contador atual na página
      document.getElementById('contador').textContent = `Desafios completados: ${contador}`;
      // Atualiza o contador se o botão for clicado
      document.getElementById('cancel-button').addEventListener('click', () => {
          const today = new Date().toISOString().split('T')[0]; // Formato YYYY-MM-DD               
          
          // Verifica se o desafio já foi feito hoje
          if (today !== lastChallengeDate && contador < 30) {
          
              lastChallengeDate = today;
              contador ++;// Incrementa o contador
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
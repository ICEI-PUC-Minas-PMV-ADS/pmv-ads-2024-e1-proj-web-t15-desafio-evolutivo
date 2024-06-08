$(document).ready(function() {
    $('#my-button').click(function() {
      $('#popup-modal').fadeIn();0
      $(this).hide(); // Esconde o botão "Iniciar"
      
    });
    
    $('#ok-button').click(function() {
      window.location.href = "segundodia.html";
    });
    
    $('#cancel-button').click(function()
    { 
    });

  });
  document.addEventListener('DOMContentLoaded', (event) => {
    // Recupera o contador e a data do último desafio do localStorage
    let contador = parseInt(localStorage.getItem('contador')) || 0; //alterar esse número para forçar teste
    let lastChallengeDate = localStorage.getItem('lastChallengeDate') || '';

    // Atualiza o contador se o botão for clicado
    document.getElementById('cancel-button').addEventListener('click', () => {
        const today = new Date().toISOString().split('T')[0]; // Formato YYYY-MM-DD               
        
        // Verifica se o desafio já foi feito hoje
        if (today !== lastChallengeDate && contador < 30) {
            contador = Math.min(contador + 1); // Incrementa o contador

            if  ( today !== lastChallengeDate){
              alert("Parabéns pela conclusão da tarefa!");
              window.location.href = "segundodia.html";}
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
  // var dados = JSON.parse(localStorage.getItem("chave"));

  // document.getElementById("dadosnome").value = dados.email;

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

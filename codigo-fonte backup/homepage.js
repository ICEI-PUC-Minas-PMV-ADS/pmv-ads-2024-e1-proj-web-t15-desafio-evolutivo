function myFunction(x) {
    x.classList.toggle("change");
  }

  function openNav() {
      document.getElementById("myNav").style.width = "100%";
  }
  
  function closeNav() {
      document.getElementById("myNav").style.width = "0%";
  }

  function alertaDesafio (){
  let lastChallengeDate = localStorage.getItem('lastChallengeDate') || '';
  let contador = localStorage.getItem("contador");
  const hoje = new Date();

  if (lastChallengeDate && hoje !== lastChallengeDate && 0 < contador < 30){
    alert("Você está inscrito em um ou mais desafios! \nNão se esqueça de fazer hoje!")
  }}

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

  window.onload = function () {
    alertaDesafio();
    enviarDados();
    };

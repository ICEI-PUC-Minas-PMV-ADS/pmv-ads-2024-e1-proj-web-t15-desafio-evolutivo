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

  window.onload = function () {
    alertaDesafio();
    };

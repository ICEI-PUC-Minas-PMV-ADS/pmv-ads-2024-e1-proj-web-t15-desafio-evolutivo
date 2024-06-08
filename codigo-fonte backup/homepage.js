function myFunction(x) {
    x.classList.toggle("change");
  }

  function openNav() {
      document.getElementById("myNav").style.width = "100%";
  }
  
  function closeNav() {
      document.getElementById("myNav").style.width = "0%";
  }

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

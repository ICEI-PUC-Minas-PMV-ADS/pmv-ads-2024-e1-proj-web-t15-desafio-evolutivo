// Função para importar os dados senha e email do local storage, se disponíveis
function importarValor() {
  const email = localStorage.getItem('cadastro-email');
  const senha = localStorage.getItem('cadastro-password');

  if (email && senha) {
    document.getElementById('conteudo-principal-dados-email').value = email;
    document.getElementById('conteudo-principal-dados-senha').value = senha;
  }
}

// Função para habilitar edição dos campos
document.getElementById('editar').addEventListener('click', function() {
  // Habilitar todos os campos de entrada
  const inputs = document.querySelectorAll('#dados-form input');
  inputs.forEach(input => input.disabled = false);

  // Esconder o botão de editar e mostrar o botão de salvar
  document.getElementById('editar').style.display = 'none';
  document.getElementById('salvar').style.display = 'inline';
});

// Função para mostrar a foto de perfil
function mostrarFotodePerfil() {
  const input = document.getElementById('foto-input');
  const output = document.getElementById('conteudo-principal-perfil-anon');

  input.onchange = function (e) {
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.onload = function(event) {
      output.src = event.target.result;
      output.style.width = '250px';
      output.style.height = '250px';
      localStorage.setItem('profilepic', event.target.result);
      const avatar = document.querySelector('.cabecalho-avatar');
      avatar.src = localStorage.getItem('profilepic');
    }

    reader.readAsDataURL(file);
  };

  input.click();
}

// Função para carregar a imagem de perfil do local storage
function carregarImagemDePerfil() {
  const fotosalva = localStorage.getItem('profilepic');

  if (fotosalva) {
    const avatar = document.querySelector('.cabecalho-avatar');
    avatar.src = fotosalva;
    const perfil = document.querySelector('#conteudo-principal-perfil-anon');
    perfil.src = fotosalva;
    document.getElementById('botao-imagem').innerText = 'Trocar imagem';
  }
}

// Carregar dados do local storage e imagem de perfil quando a página é carregada
window.onload = function() {
  importarValor();
  carregarImagemDePerfil();
};
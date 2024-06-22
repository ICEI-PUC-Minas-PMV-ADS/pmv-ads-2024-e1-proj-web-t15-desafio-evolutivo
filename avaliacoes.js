document.addEventListener('DOMContentLoaded', function () {
    function handleStarClick(stars, clickedIndex) {
        stars.forEach((star, index) => {
            if (index < clickedIndex) {
                star.classList.add('ativo');
                star.classList.remove('inativo');
            } else {
                star.classList.add('inativo');
                star.classList.remove('ativo');
            }
        });
    }

    const corridaStars = document.querySelectorAll('.Corrida-checked .star-icon');
    corridaStars.forEach(star => {
        star.addEventListener('click', function () {
            const starIndex = parseInt(this.getAttribute('data-avaliacao'));
            handleStarClick(corridaStars, starIndex);
        });
    });

    const meditacaoStars = document.querySelectorAll('.Meditação-checked .star-icon');
    meditacaoStars.forEach(star => {
        star.addEventListener('click', function () {
            const starIndex = parseInt(this.getAttribute('data-avaliacao'));
            handleStarClick(meditacaoStars, starIndex);
        });
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
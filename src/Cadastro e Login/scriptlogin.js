document.getElementById("form-signup").addEventListener('submit', function(event){
    event.preventDefault();
    const email = document.getElementById("cadastro-email").value;
    const senha = document.getElementById("cadastro-password").value;
    localStorage.setItem(email,senha);
    alert ("123");
});


function salvar(){
        // Pega os dados do email e senha
        const email = document.getElementById("cadastro-email").value;
        const senha = document.getElementById("cadastro-password").value;
        const confirmaSenha = document.getElementById("confirma-password").value;

         // Verificar se a senha tem pelo menos 6 caracteres, incluindo pelo menos uma letra minúscula, uma letra maiúscula e um caractere especial
    const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/;
    if (!regex.test(senha)) {
        alert("A senha deve ter no mínimo 6 caracteres, incluindo pelo menos uma letra minúscula, uma letra maiúscula e um caractere especial.");
        return;
    }
    if (senha == confirmaSenha) {
        // Verificar se o e-mail já está armazenado no localStorage
        if (localStorage.getItem(email)) {
            alert("Este e-mail já está cadastrado. Coloque outro e-mail e tente novamente");
            return;
        }

        // Armazenar e-mail e senha em chaves separadas no localStorage
        localStorage.setItem(email, senha);
        alert("Dados salvos com sucesso!");
    } else {
        alert ("Senhas não conferem");
    }
}


document.getElementById("form-login").addEventListener('submit', function(event){
    event.preventDefault();
    logar();
});
function logar(){
    
    var email = document.getElementById("login-email").value;
    var senha = document.getElementById("login-password").value;

     // Obter a senha armazenada no localStorage usando o e-mail
     var senhaSalva = localStorage.getItem(email);

    if (senha === senhaSalva ){
        window.location.href = "Menu IniciaL.html";
    } else {
        alert ("E-mail ou senha inválidos");
    }
}

document.querySelector(".form-signup").addEventListener('submit', function(event){
    event.preventDefault();
    var email = document.getElementById("cadastro-email").value;
    var senha = document.getElementById("cadastro-password").value;
    var nome = document.getElementById("cadastro-nome").value;
    var dados = {
       nome: nome, 
       email: email,
       senha: senha
    };
    var jsonString = JSON.stringify(dados);
    localStorage.setItem('chave',jsonString);
    console.log(jsonString)
});


function salvar(){
    // Pega os dados do email, senha e nome
    var nome = document.getElementById("cadastro-nome").value;
    var email = document.getElementById("cadastro-email").value;
    var senha = document.getElementById("cadastro-password").value;
    var confirmaSenha = document.getElementById("confirma-password").value;

    // Verificar se a senha tem pelo menos 6 caracteres, incluindo pelo menos uma letra minúscula, uma letra maiúscula e um caractere especial
    const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/;
    if (!regex.test(senha)) {
        alert("A senha deve ter no mínimo 6 caracteres, incluindo pelo menos uma letra minúscula, uma letra maiúscula e um caractere especial.");
        return;
    }
    if (senha == confirmaSenha) {
        // Verificar se o e-mail já está armazenado no localStorage
        if (localStorage.getItem(email) ) {
            alert("Este e-mail já está cadastrado. Coloque outro e-mail e tente novamente");
            return;
        }

        // Cria um objeto com o nome, e-mail e senha
        const usuario = {
            usuNome: nome,
            usuEmail: email,
            usuSenha: senha
        };

        
        // Armazena o objeto no localStorage como uma string JSON
        localStorage.setItem(email, JSON.stringify(usuario));
        alert("Dados salvos com sucesso!");
    } else {
        alert ("Senhas não conferem");
    }
}


document.querySelector(".form-login").addEventListener('submit', function(event){
    event.preventDefault();
    logar();
});
function logar(){
    
    var email = document.getElementById("login-email").value;
    var senha = document.getElementById("login-password").value;

    // Obter o objeto do usuário armazenado no localStorage usando o e-mail
    var dados = JSON.parse(localStorage.getItem("chave"));

  
    // Verificar se o usuário existe e se a senha está correta
    if (dados.email=== email  &&  dados.senha === senha  ){
        window.location.href = "homepage.html";
        
    } else {
        alert ("E-mail ou senha inválidos");
    }
}

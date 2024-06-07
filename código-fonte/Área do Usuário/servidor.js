// Envio de notificações com servidor

// Instale o Node.js
// Abra o terminal do vs code
// No local desse arquivo, digite: npm install nodemailer cors body-parser express
// Com os módulos acima instalados, rode o servidor (run current file)
// Com o servidor ligado, vá até o areadousuário.html e rode com o live server
// No console você deverá receber aviso de servidor rodando na porta 3000
// Aviso de dados recebidos com o JSON que veio do cliente
// Aviso recebido de email enviado.

const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT = 3000;
const cors = require('cors'); 
// ENVIO DE EMAIL
const nodemailer = require('nodemailer'); 

// Middleware para fazer o parsing do corpo da requisição
app.use(bodyParser.json());

app.use(cors());
// Rota para receber os dados enviados pela requisição AJAX
app.post('/receber-dados', (req, res) => {
    // Dados enviados pelo cliente
    const dadosRecebidos = req.body;
    const emailrecebido = dadosRecebidos.email;
    const nomerecebido = dadosRecebidos.nome;

    // Processamento dos dados
    console.log('Dados recebidos:', dadosRecebidos);


    // Envie uma resposta de volta para o cliente, se necessário
    res.status(200).send('Dados recebidos com sucesso!');
     // Configuração do transporte
  let transporter = nodemailer.createTransport({
    service: 'Gmail',  
    auth: {
        user: 'desafioevolutivo30@gmail.com',
        pass: 'ysec mpmt gqbn ijyb' , //app password da google ysec mpmt gqbn ijyb
    }
});

// Configuração dos e-mails

let mailOptions = {
    from: 'desafioevolutivo30@gmail.com',
    to: 'arturma30@gmail.com, ' + emailrecebido, 
    subject: 'Bem-vindo ao Desafio Evolutivo!',
    text: 'Parabéns por participar do Desafio Evolutivo! \n\nNão se esqueça de realizar seus desafios todos os dias!'
};

let mailOptions2 = {
  from: 'desafioevolutivo30@gmail.com',
  to: 'arturma30@gmail.com, ' + emailrecebido, 
  subject: 'Desafio Evolutivo! \u{1F525}',
  text: 'Olá! \n\nNão se esqueça de realizar seu desafio hoje! \n\nGrandes conquistas começam em pequenas ações!'
};

// O email seria disparado às 18h pelo servidor lembrando o usuário de realizar seu desafio

const dezoitohoras = new Date();
dezoitohoras.setHours(18, 0, 0);

//if (new Date() > meiodia && new Date() !== lastChallengeDate && 1 <= contador < 30) { <- exemplo de 
//lógica integrando os valores do frontend

// Enviar o e-mail e escrever no log que foi enviado
// essa condição representa o caso de o usuário não ter feito o desafio até meio dia
if (new Date() > dezoitohoras) {
transporter.sendMail(mailOptions2, function(error, info){
    if (error) {
        console.log(error);
    } else {
        console.log('E-mail enviado: ' + info.response);
    }
})} 

// Essa condição representa o caso de o usuário ter se cadastrado para realizar o desafio pela primeira vez
else {
transporter.sendMail(mailOptions, function(error, info){
  if (error) {
      console.log(error);
  } else {
      console.log('E-mail enviado: ' + info.response);
  }
})};
});

// Inicia o servidor
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);

   
});


  
  
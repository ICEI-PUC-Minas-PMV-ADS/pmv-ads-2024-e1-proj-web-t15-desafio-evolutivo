// Para testar essa funcionalidade:
// Instale o Node.js
// Abra o terminal do vs code
// Na pasta desse arquivo, digite npm install nodemailer
// Run current file

// senha do email desafioevolutivo30@gmail.com para teste: Desafio30evolutivo!
// é necessário verificação em duas etapas caso queira checar o email recebido

  const nodemailer = require('nodemailer'); 
  
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
      to: 'arturma30@gmail.com, desafioevolutivo30@gmail.com', 
      subject: 'Bem-vindo ao Desafio Evolutivo!',
      text: 'Parabéns por participar do Desafio Evolutivo! \n\nNão se esqueça de realizar seus desafios todos os dias!'
  };

  let mailOptions2 = {
    from: 'desafioevolutivo30@gmail.com',
    to: 'arturma30@gmail.com, desafioevolutivo30@gmail.com', 
    subject: 'Desafio Evolutivo! \u{1F525}',
    text: 'Olá! \n\nNão se esqueça de realizar seu desafio hoje! \n\nGrandes conquistas começam em pequenas ações!'
};
  
  // O email seria disparado ao meio dia pelo servidor caso o usuário não tenha feito o desafio do dia

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
# Plano de Testes de Software

<span style="color:red">Pré-requisitos: <a href="https://github.com/ICEI-PUC-Minas-PMV-ADS/ads-e1-exemplo-vida-de-estudante/tree/main/documentos/02-Especificação%20do%20Projeto.md"> Especificação do Projeto</a></span>, <a href="https://github.com/ICEI-PUC-Minas-PMV-ADS/ads-e1-exemplo-vida-de-estudante/tree/main/documentos/04-Projeto%20de%20Interface.md"> Projeto de Interface</a>

Os requisitos para realização dos testes de software são:
<ul><li>Site publicado na internet;</li>
<li>Navegador da internet: Chrome, Firefox ou Edge.</li>
</ul>

Os testes funcionais a serem realizados na aplicação são descritos a seguir.

<table>
 <tr>
  <th>Caso de teste</th>
  <th>Requisitos associados</th>
  <th>Objetivo do teste</th>
  <th>Passos</th>
  <th>Critérios de êxito</th>
  <th>Responsável</th>
 </tr>
 <tr>
  <td>CT-09999 **exemplo** : Verificar o funcionamento dos links da página Home</td>
  <td>
   <ul>
    <li>RF-001:	O site deve permitir ao usuário cadastrar uma conta.</li>
   <li>RF-002:	O site deve permitir ao usuário fazer o login da sua conta.</li>
   <li>RF-005:	O site deve permitir ao usuário disponibilizar informações das disciplinas de tutoria e suas informações para contato.</li>
    <li>RF-007:	O site deve permitir ao usuário visualizar os detalhes do livro.</li>
   </ul>
  </td>
  <td>Verificar se os links da página Home estão encaminhando para as respectivas páginas corretamente</td>
  <td>
   <ol>
    <li>Acessar o navegador.</li>
    <li>Informar o endereço do site.</li>
    <li>Visualizar a página Home.</li>
    <li>Clicar nos links da página Home.</li>
   </ol>
   </td>
  <td>Todos os links da página Home devem encaminhar os usuários para as páginas descritas.</td>
  <td>Maria</td>
 </tr>
</table>

 
<table>
 <tr>
  <th>Caso de teste</th>
  <th>Requisitos associados</th>
  <th>Objetivo do teste</th>
  <th>Passos</th>
  <th>Critérios de êxito</th>
  <th>Responsável</th>
 </tr>
 <tr>
  <td>CT-01: Verificar o funcionamento dos links da página Home</td>
  <td>
   <ul>
    <li>RF-01:	O sistema deve permitir o cadastro e login na plataforma.</li>
   <li>RNF-01:	O sistema deve exigir senha com no mínimo 6 caracteres sendo 1 maiúsculas, 1 minúsculas e 1 caracteres especiais(@,#,$,&,*,etc)</li>
    
   </ul>
  </td>
  <td>Verificar se o usuário consegue fazer seu cadastro e login acessando a aplicação e salvando seus dados</td>
  <td>
   <ol>
    <li>Acessar o navegador.</li>
    <li>Abrir a página de login.</li>
    <li>Realizar o cadastro na janela "inscreva-se" e clicar em continuar</li>
    <li>Inserir os dados cadastrados na janela "entrar" e clicar em entrar.</li>
   </ol>
   </td>
  <td>Os deve conseguir acessar a homepage tendo seus dados (nome, email e senha) salvos.</td>
  <td>Artur</td>
 </tr>
</table>
<table>
 <tr>
  <th>Caso de teste</th>
  <th>Requisitos associados</th>
  <th>Objetivo do teste</th>
  <th>Passos</th>
  <th>Critérios de êxito</th>
  <th>Responsável</th>
 </tr>
 <tr>
  <td>CT-02: Verificar o funcionamento das avaliações dos desafios </td>
  <td>
   <ul>
    <li>RF-11: O sistema deve permitir ao usuário fazer avaliações de desafios utilizando de 1 a 5 estrelas.</li> 
   </ul>
  </td>
  <td>Verificar se o usuário consegue fazer a avaliação dos desafios</td>
  <td>
   <ol>
    <li>Acessar o navegador.</li>
    <li>Abrir a página de login.</li>
    <li>Inserir os dados do login e clicar em entrar</li>
    <li></li>
   </ol>
   </td>
  <td>Os deve conseguir acessar a homepage tendo seus dados (nome, email e senha) salvos.</td>
  <td>Artur</td>
 </tr>
</table>







## Ferramentas de Testes (Opcional)

Comente sobre as ferramentas de testes utilizadas.
 
> **Links Úteis**:
> - [IBM - Criação e Geração de Planos de Teste](https://www.ibm.com/developerworks/br/local/rational/criacao_geracao_planos_testes_software/index.html)
> - [Práticas e Técnicas de Testes Ágeis](http://assiste.serpro.gov.br/serproagil/Apresenta/slides.pdf)
> -  [Teste de Software: Conceitos e tipos de testes](https://blog.onedaytesting.com.br/teste-de-software/)
> - [Criação e Geração de Planos de Teste de Software](https://www.ibm.com/developerworks/br/local/rational/criacao_geracao_planos_testes_software/index.html)
> - [Ferramentas de Test para Java Script](https://geekflare.com/javascript-unit-testing/)
> - [UX Tools](https://uxdesign.cc/ux-user-research-and-user-testing-tools-2d339d379dc7)

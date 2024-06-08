# Registro de Testes de Software

Os testes funcionais realizados na aplicação web são descritos a seguir.

<ol>
  <li> CT-01: Verificar o funcionamento dos links da página Home.

  Responsável: Artur
  

https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2024-e1-proj-web-t15-desafio-evolutivo/assets/163445754/57b8da21-0834-4a3d-b742-a7b222867387

Os dados de cadastro são inseridos pelo usuário e gravados no localstorage. Então o usuário faz login com seus dados e acessa a homepage.
  </li>

<hr>


  <li> CT-02: Verificar o funcionamento das avaliações dos desafios.

  Responsável: Sharon.


https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2024-e1-proj-web-t15-desafio-evolutivo/assets/166241111/8778ec79-ccfc-4d81-a434-43978f2952b6

O usuário pode avaliar os desafios realizados utilizando até 5 estrelas.

  </li>
  <hr>

  <li> CT-03: Verificar o funcionamento da alteração de dados de usuarios.

  Responsável: Gabriel Almeida.


https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2024-e1-proj-web-t15-desafio-evolutivo/assets/163691808/c296d612-b029-4e77-9edf-8cb199662986

O usuário pode verificar e editar seus dados pessoais que serão novamente armazenados no localstorage.

  </li>
   <hr>

  <li> CT-04: Verificar o funcionamento da inscrição nos desafios.

  Responsável: Enzo.

![WhatsApp Image 2024-06-07 at 9 10 35 PM](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2024-e1-proj-web-t15-desafio-evolutivo/assets/166241111/eff1fe4b-3547-4b1f-b826-f177f91a7151)


![WhatsApp Image 2024-06-08 at 9 20 25 AM](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2024-e1-proj-web-t15-desafio-evolutivo/assets/166241111/7bdf88b3-1fb5-4cf9-aed1-60858aa94adb)


  </li>
  <hr>
  
<li> CT-05: Verificar o funcionamento da tela de progresso
<br>
<br>Responsável: Gabriel Estabanez
<br>
<img src='img/Captura%20de%20tela%202024-06-06%20200041.png'  >
<br>
<img src='img/Captura%20de%20tela%202024-06-06%20200108.png'  ><br>

O usuário pode verificar o seu progresso aumentando de "21/30" para "22/30" na página do progresso, após realizar um dia do desafio.

</li>
<hr>


  
  <li> CT-06: Verificar se o usuário consegue escolher entre desafios fisícos e mentais.

  Responsável: Gustavo
  
![desafiosfisicosoumentais](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2024-e1-proj-web-t15-desafio-evolutivo/assets/166300104/40ec67f9-66ce-44a0-a2a5-3038fdd3309c)

  </li>

<hr>


  <li> CT-07: Verificar se o usuário terá acesso com imagens respectivas de cada desafio. Verificar se o usuário terá o nível de cada desafio apresentado em cada desafio.

  Responsável: Gustavo
  
![niveisdosdesafios](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2024-e1-proj-web-t15-desafio-evolutivo/assets/166300104/f3a7122f-41f8-4048-a7af-b39b8a580924)
![imagensdosdesafios](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2024-e1-proj-web-t15-desafio-evolutivo/assets/166300104/9041e657-05d5-4147-86fe-bef82339cc46)

  </li>

<hr>
  <li> CT-08: Verificar se o sistema está fornecendo uma descrição do desafio, primeiro dia e conclusão.

  Responsável: Sharon
  


https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2024-e1-proj-web-t15-desafio-evolutivo/assets/166241111/84844e8a-5562-4ea4-a5d5-287bd9f12d7b



  </li>
<hr>
  <li> CT-09: Verificar se o sistema está enviando lembretes aos usuários para completarem o desafio.

  Responsável: Sharon
  

![Captura de tela 2024-06-08 194839](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2024-e1-proj-web-t15-desafio-evolutivo/assets/166241111/8f13576f-dba9-4244-aee7-eb8a0dac0690)



![Captura de tela 2024-06-08 194912](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2024-e1-proj-web-t15-desafio-evolutivo/assets/166241111/237ffea5-aeb7-4f3e-9fed-2a78bef703f7)

O usuário recebe uma notificação ao entrar na home page caso esteja inscrito em um desafio e ainda não realizado a tarefa do dia. Também recebe um email no seu email cadastrado.



  </li>
  
## Avaliação

Os testes mostraram resultados esperados, indicando necessidade de pequenas alterações e aprimoramentos que foram realizados ao longo do projeto. Um dos maiores desafios foi implementar toda a lógica e comunicação entre as páginas quando o usuário se inscreve no desafio e avança nas tarefas diárias. 

Os testes CT-01 e CT-03 foram importantes para o desenvolvimento das funcionalidades principais para atender os requisitos, pois mostravam o que era salvo em localstorage para ser reutilizado.

O teste CT-09 exigiu uma solução para encontrar uma forma de notificar o usuário apenas se ele estivesse inscrito no desafio atendendo o RF-08. Também foi fornecida uma solução utilizando um servidor com Node.js que envia e-mails diretamente ao e-mail cadastrado, aproximando o projeto da realidade.

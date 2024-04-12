
# Metodologia

_<span style="color:red">Pré-requisitos: <a href="2-Especificação do Projeto.md"> Documentação de Especificação</a></span>_

A metodologia ágil escolhida é a SCRUM, pois cria um ambiente para a entrega eficiente de projetos, com adaptabilidade às mudanças, transparência nas atividades e fazendo com que a equipe se autogerencie e aprenda com a experiência (2023, Amazon Web Services). 

_Descreva aqui a metodologia de trabalho do grupo para atacar o problema. Definições sobre os ambiente de trabalho utilizados pela  equipe para desenvolver o projeto. Abrange a relação de ambientes utilizados, a estrutura para gestão do código fonte, além da definição do processo e ferramenta através dos quais a equipe se organiza (Gestão de Times)._

## Relação de Ambientes de Trabalho

_Os artefatos do projeto são desenvolvidos a partir de diversas plataformas e a relação dos ambientes com seu respectivo propósito deverá ser apresentada em uma tabela que especifica que detalha Ambiente, Plataforma e Link de Acesso. 
Nota: Vide documento modelo do estudo de caso "Portal de Notícias" e defina também os ambientes e frameworks que serão utilizados no desenvolvimento de aplicações móveis._ 

Feito abaixo junto com **Ferramentas**

## Controle de Versão

Para organização e distribuição das tarefas do projeto, a equipe está utilizando quadro kanban no GitHub, estruturado com as seguintes listas:

Product Backlog: recebe as tarefas a serem trabalhadas e representa o Backlog do produto. Todas as atividades identificadas no decorrer do projeto são incorporadas a esta lista.
To Do: esta lista representa o Sprint Backlog que está sendo trabalhado.
In progress: lista das tarefas iniciadas.
Done: nesta lista são colocadas as tarefas finalizadas e as que passaram pelos testes e controle de qualidade, prontas para serem entregues aos usuários.
O quadro kanban do grupo no GitHub está disponível no link https://github.com/orgs/ICEI-PUC-Minas-PMV-ADS/projects/1033 e é apresentado, no estado atual, na figura abaixo:


_A ferramenta de controle de versão adotada no projeto foi o
[Git](https://git-scm.com/), sendo que o [Github](https://github.com)
foi utilizado para hospedagem do repositório._

O projeto segue a seguinte convenção para o nome de branches:

- `main`: versão estável já testada do software
- `unstable`: versão já testada do software, porém instável
- `testing`: versão em testes do software
- `dev`: versão de desenvolvimento do software

Quanto à gerência de issues, o projeto adota a seguinte convenção para
etiquetas:

* Bug (Erro no código)
* Development (Desenvolvimento)
* Documentation (Documentação)
* Project Management (Gerência de Projetos)
* Infrastructure (Infraestrutura)
* Tests (Testes)

_Discuta como a configuração do projeto foi feita na ferramenta de versionamento escolhida. Exponha como a gerência de tags, merges, commits e branchs é realizada. Discuta como a gerência de issues foi realizada._

> **Links Úteis**:
> - [Microfundamento: Gerência de Configuração](https://pucminas.instructure.com/courses/87878/)
> - [Tutorial GitHub](https://guides.github.com/activities/hello-world/)
> - [Git e Github](https://www.youtube.com/playlist?list=PLHz_AreHm4dm7ZULPAmadvNhH6vk9oNZA)
>  - [Comparando fluxos de trabalho](https://www.atlassian.com/br/git/tutorials/comparing-workflows)
> - [Understanding the GitHub flow](https://guides.github.com/introduction/flow/)
> - [The gitflow workflow - in less than 5 mins](https://www.youtube.com/watch?v=1SXpE08hvGs)

## Gerenciamento de Projeto

### Divisão de Papéis

Como a equipe se baseia na metodologia SCRUM, a divisão de papeis é a seguinte:
- Scrum Master: Sharon Steicy;
- Product Owner: Artur Maciel;
- Equipe de Desenvolvimento: Artur Maciel, Enzo Gabriel, Gabriel Almeida, Gabriel Estebanez, Giuseppe Maida, Gustavo Paz, Sharon Steicy;

_> **Links Úteis**:_
> - [11 Passos Essenciais para Implantar Scrum no seu Projeto](https://mindmaster.com.br/scrum-11-passos/)
> - [Scrum em 9 minutos](https://www.youtube.com/watch?v=XfvQWnRgxG0)
> - [Os papéis do Scrum e a verdade sobre cargos nessa técnica](https://www.atlassian.com/br/agile/scrum/roles)

### Processo



_Coloque  informações sobre detalhes da implementação do Scrum seguido pelo grupo. O grupo deverá fazer uso do recurso de gerenciamento de projeto oferecido pelo GitHub, que permite acompanhar o andamento do projeto, a execução das tarefas e o status de desenvolvimento da solução._
 
_> **Links Úteis**:_
> - [Planejamento e Gestáo Ágil de Projetos](https://pucminas.instructure.com/courses/87878/pages/unidade-2-tema-2-utilizacao-de-ferramentas-para-controle-de-versoes-de-software)
> - [Sobre quadros de projeto](https://docs.github.com/pt/issues/organizing-your-work-with-project-boards/managing-project-boards/about-project-boards)
> - [Project management, made simple](https://github.com/features/project-management/)
> - [Sobre quadros de projeto](https://docs.github.com/pt/github/managing-your-work-on-github/about-project-boards)
> - [Como criar Backlogs no Github](https://www.youtube.com/watch?v=RXEy6CFu9Hk)
> - [Tutorial Slack](https://slack.com/intl/en-br/)

### Ferramentas

As ferramentas empregadas no projeto são:

- Editor de código.
- Ferramentas de comunicação
- Ferramentas de desenho de tela (_wireframing_)

O editor de código foi escolhido porque ele possui uma integração com o sistema de versão. As ferramentas de comunicação utilizadas possuem integração semelhante e por isso foram selecionadas. Por fim, para criar diagramas utilizamos essa ferramenta por melhor captar as necessidades da nossa solução.

Os artefatos do projeto são desenvolvidos a partir das plataformas GitHub, MarvelApp e Canva, apresentadas com seu propósito na tabela que se segue.

| Ambiente  | Plataforma | Link |
| --------- | ---------- | ------- |
| Repositório do código fonte | GitHub  | a inserir |
| Documentos do projeto  | GitHub  | a inserir  |
| Protótipo e fluxo  | Marvel  | a inserir  |
| Gerenciamento do Projeto  | GitHub  | a inserir  |
| Projeto de interface  | Canva | a inserir  |

Escolhemos utilizar o GitHub para centralizar o gerenciamento do projeto, consulta/edição de documentos e código fonte na mesma plataforma buscando eficiência. Utilizamos o Marvel para gerar o protótipo de baixa fidelidade e o fluxo das telas pela sua facilidade, e o Canva para suprir limitações no Marvel quanto ao design do projeto de interface.

_Liste quais ferramentas foram empregadas no desenvolvimento do projeto, justificando a escolha delas, sempre que possível._
 
> **Possíveis Ferramentas que auxiliarão no gerenciamento**: 
> - [Slack](https://slack.com/)
> - [Github](https://github.com/)

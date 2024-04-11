# Bem vindo!
Este é o repositório do teste de frontend para a MarQ :clock12:. Você está preparado? :rocket::rocket::rocket:

## Descrição
O teste consiste em avaliar suas capacidades técnicas e o seu processo ao desenvolver uma aplicação dado um prazo x;
Para isto, você deverá usar a [API pública de pokémon](https://pokeapi.co) e a [biblioteca de gráficos Echarts](https://echarts.apache.org/en/index.html);
Você pode usar sua criatividade para nos mostrar o que você quiser utilizando as bibliotecas acima(mas lembre-se do prazo especificado durante a entrevista);

Aqui vai uma lista de requisitos obrigatórios:
 - O projeto deve ser feito em React (javascript ou typescript, fica à seu critério)
 - Deve-se utilizar as bibliotecas mencionadas acima
 - Ao final do projeto, abra um pull request para a branch main deste repositório. O PR deve seguir o seguinte padrão [Seu nome] - Teste frontend

### Passos
- Crie um fork do projeto
- Clone o projeto
- Crie uma branch com seu nome antes de iniciar o desenvolvimento
- Desenvolva :)
- Crie um pull request seguindo o padrão descrito acima

### Critérios avaliativos e considerações:
- Organização do projeto
- Legibilidade do código
- Capacidade de utilizar a documentação da API e da biblioteca utilizada
- Não se esqueça de abrir um PR seguindo a regra e manter seus commits curtos

### STEP BY STEP VICTOR
ENVIROMENT:
  - mkdir front-end-test-marq-victor-reksidler
  - cd front-end-test-marq-victor-reksidler
  - git init
  - git clone git@github.com:vbreksidler/frontend-test.git
  - git checkout -b front-end-test-marq-victor-reksidler
  - npx create-react-app
  - npm i echarts --save
  - npm i tailwind


DEVELOPMENT:
  - fetch API https://pokeapi.co/api/v2/type;
  - useState to set the type data for the form;
  - handleChange to set the fetch API for the eCharts data;
  - use the graphData to show the graph with the type info;
  - add echarts;
  - add the logic to echarts using the data;
    * Dynamic fetch the api, to bring the data numbers of the types of pokemon that get and do double damage;
    * use async and await to feed the array;
  - add style;

FUTURE IMPROVEMENTS:
  - componentized content;
  - add responsive design;
  - fetch more api's to build new's graph;
  - add a home page to select what kind of data you want to see;
    
[Screencast from 11-04-2024 01:13:44.webm](https://github.com/vbreksidler/front-end-test-marq-victor-reksidler/assets/94481634/ab4cea43-03c4-4d9a-9eeb-71435e5ebdcd)

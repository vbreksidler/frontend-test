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

### PASSO A PASSO VICTOR

<strong>OBJETIVO: 
Utilizar os dados da API Pokémon para desenvolver gráficos interativos que ilustrem a distribuição de Pokémons e movimentos de acordo com o tipo elemental escolhido. Adicionalmente, apresentar e quantificar os Pokémons de cada tipo elemental que infligem e são vulneráveis ao dano dobrado pelo tipo selecionado.

AMBIENTE:
  - mkdir front-end-test-marq-victor-reksidler
  - cd front-end-test-marq-victor-reksidler
  - git init
  - git checkout -b front-end-test-marq-victor-reksidler
  - npx create-react-app
  - npm i echarts --save
  - npm i tailwind

DESENVOLVIMENTO:
  - buscar API https://pokeapi.co/api/v2/type;
  - useState para definir o tipo de dados do formulário;
  - handleChange para definir a API de busca para os dados do eCharts;
  - use o graphData para mostrar o gráfico com as informações do tipo;
  - adicionar gráficos eletrônicos;
  - adicionado a lógica aos echarts usando os dados;
    *Busca dinâmica na api, para trazer os números dos dados dos tipos de pokémons que recebem e causam dano duplo;
    * usado async e await para alimentar o array;
  - adicione estilo;

MELHORIAS FUTURAS:
  - conteúdo componenteizado;
  - adicionar design responsivo;
  - buscar mais APIs para construir novos gráficos;
  - adicionar uma página inicial para selecionar que tipo de dados você deseja ver;

<i>OBJECTIVE: 
Utilize data from the Pokémon API to develop interactive graphs that illustrate the distribution of Pokémon and moves based on the selected elemental type. Additionally, present and quantify the Pokémons of each elemental type that inflict and are vulnerable to double damage from the chosen type.</strong>

ENVIROMENT:
  - mkdir front-end-test-marq-victor-reksidler     
  - cd front-end-test-marq-victor-reksidler
  - git init
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
    * used async and await to feed the array;
  - add style;

FUTURE IMPROVEMENTS:
  - componentized content;
  - add responsive design;
  - fetch more api's to build new's graph;
  - add a home page to select what kind of data you want to see;</i>
    
[Screencast from 11-04-2024 01:13:44.webm](https://github.com/vbreksidler/front-end-test-marq-victor-reksidler/assets/94481634/ab4cea43-03c4-4d9a-9eeb-71435e5ebdcd)

Segue commits que estão no meu git privado:

![image](https://github.com/vbreksidler/frontend-test/assets/94481634/50103b58-230c-4c73-bf70-1077d6517b55)


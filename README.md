# Book Store REST API

Um simples CRUD utilizando [expressjs](https://expressjs.com) para criar uma REST API

## Instalação

1. Você precisa instalar as seguintes dependencias em seu sistema:

+ [nodejs >=14.17.6](https://nodejs.org)
+ [npm >=6.14.15](https://npmjs.com)
+ [git](https://git-scm.com/)
+ [postgres >= 12.0](https://postgresql.org)
> Normalmente npm já vem instalado com nodejs

2. Clone o projeto:

```sh
git clone https://github.com/richardfsilva/book-store-rest-api
cd book-store-rest-api
```
3. Instale as dependencias do projeto:
```sh
npm install
```
4. Crie o banco de dados:
```sh
npx sequelize-cli db:create
```
5. Crie a tabela
```sh
npx sequelize-cli db:migrate
```

## Executando Localmente

Inicie o servidor:
```sh
npm run start
```
O servidor será inicializado em ``localhost:5000``

## Usando

Você pode usar o [postman](https://postman.com/), [curls](https://curl.se/) ou outro cliente API para fazer as requisições HTTP.

### Ver todos os livro

```http
GET /api/books
```
#### Exemplo
```sh
curl http://localhost:5000/api/books
```

### Procurar por um livro

```http
GET /api/books/<id>
```

| Parametro | Tipo      | Descrição                               |
|:----------|:----------|:----------------------------------------|
| `id`      | `integer` | **Obrigatório**. Id do livro à procurar |

#### Exemplo
```sh
curl http://localhost:5000/api/books/1
```

### Adicionar livro

```http
POST /api/books
```
| Parametro       | Tipo      | Descrição                                   |
|:----------------|:----------|:--------------------------------------------|
| `name`          | `string`  | **Obrigatório**. Nome do livro              |
| `author`        | `string`  | **Obrigatório**. Nome do Autor do livro     |
| `year_released` | `integer` | **Obrigatório**. Ano do lançamento do livro |
| `rating`        | `float`   | **Valor 0 por padrão**. Avaliação do livro  |
| `qtd`           | `integer` | **Obrigatório**. Quantidade disponível      |

#### Exemplo

```sh
curl -X POST -H "Content-Type: application/json" -d '{"name": "O Cortiço", "author": "Aluísio Azevedo", "year_released": 1890, "rating": 3.5, "qtd": 150}' http://localhost:5000/api/books/
```

### Alterar um livro

```http
PUT /api/books/<id>
```
| Parametro | Tipo      | Descrição                              |
|:----------|:----------|:---------------------------------------|
| `id`      | `integer` | **Obrigatório**. Id do livro à alterar |

#### Exemplo

```sh
curl -X PUT -H "Content-Type: application/json" -d '{"rating": 4.6}' http://localhost:5000/api/books/1
```
### Apagar um livro

```http
DELETE /api/books/<id>
```
| Parametro | Tipo      | Descrição                             |
|:----------|:----------|:--------------------------------------|
| `id`      | `integer` | **Obrigatório**. Id do livro à apagar |

#### Exemplo

```sh
curl -X DELETE http://localhost:5000/api/books/1
```

## Licença

[MIT](https://github.com/richardfsilva/book-store-rest-api/blob/main/LICENSE)

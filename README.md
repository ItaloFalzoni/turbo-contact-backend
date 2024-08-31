# Turbo Contact

Turbo Contact é uma aplicação backend desenvolvida com Node.js e Express para gerenciar contatos. Este projeto utiliza JSON Web Tokens (JWT) para autenticação e Mongoose para interagir com o MongoDB.

## Requisitos

- Node.js v20.x
- Yarn v4.4.1
- MongoDB

## Instalação

1. Clone o repositório:

```sh
git clone https://github.com/seu-usuario/turbo-contact.git
cd turbo-contact
```
2. Instale as dependências:

```sh
yarn install
```

3. Crie um arquivo .env na raiz do projeto configure para as seguintes variáveis

```
MONGODB_STRING_CONNECTION=sua_string_de_conexao
JWT_SECRET=sua_jwt_secret
```

## Scripts
- `yarn start`: Inicia o servidor em modo de produção.
- `yarn dev`: Inicia o servidor em modo de desenvolvimento com Nodemon.

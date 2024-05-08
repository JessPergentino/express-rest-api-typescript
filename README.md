![licence](https://img.shields.io/github/license/JessPergentino/express-rest-api-typescript?style=for-the-badge) ![version](https://img.shields.io/github/package-json/v/JessPergentino/express-rest-api-typescript/main?logo=Node.js&style=for-the-badge)

# express-rest-api-typescript

Esse é um boilerplate para construir REST APIs usando Node.js e TypeScript.

## 📁Estrutura de Diretórios do Projeto

Este projeto está organizado da seguinte maneira:

```
src
│   app.js          # Classe app
│   server.js       # Server para iniciar o app
└───api
  └───controllers   # Funções da controllers do express route
  └───errors        # Classes de Error da aplicação
  └───interfaces    # Interfaces da aplicação
  └───models        # Modelos do banco de dados
  └───repositories* # Query builders
  └───services      # Regras de negócio
└───config          # Configuração das variaveis de ambiente
└───middlewares     # Funções de Middleware do express
└───routes          # Definição de rotas express
└───types           # Tipagem (d.ts) para Typescript
└───utils           # Trechos de código pequeno
```

[Referência - Como organizar e estruturar projetos com node.js](https://medium.com/@diomalta/como-organizar-e-estruturar-projetos-com-node-js-4845be004899)

## 🛠️ Rodar o projeto

Para rodar o servidor execute o comando

> yarn start

Para gerar o build do projeto execute

> yarn build

Para rodar os linters execute

> yarn lint

## 📄 Acesso a documentação do projeto

A documenttação do projeto pode ser acessada a partir do caminho **/apidoc**

> <http://localhost:3000/apidoc>

Para gerar a documentação do projeto execute o comando

> yarn apidoc

## ✅Tecnologias utilizadas

- Node.js
- Typescript
- Express
- Sequelize
- PostgreSQL
- ESLint
- Prettier
- ApiDoc

## 📝Licença

O projeto express-rest-api-typescript é licenciado pelo MIT.

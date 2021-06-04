# Nome do Projeto 
<h1 align="center">APIRESTFULL com Nodejs, Express e Mongo</h1>

## Começando

Para executar o projeto, será necessário instalar os seguintes programas:

- [NodeJs](https://nodejs.org/en/download/)
- [Visual Studio Code](https://code.visualstudio.com/download)
- [Insomia-Software de teste de API](https://insomnia.rest/download)
- [Postman-Software de teste de API](https://www.postman.com/downloads/)
- [MongoDB-Criar uma conta gratuita, e criar seu banco de dado](https://account.mongodb.com/account/login)

## Desenvolvimento

Para iniciar o desenvolvimento, é necessário clonar o projeto do GitHub num diretório de sua preferência:

```shell
cd "diretorio de sua preferencia"
git clone https://github.com/LuanFaust/test-FullstackJSJunior.git
```

### Construção

Para construir o projeto com o NodeJs, Mongo e Express, executar os comandos abaixo:

```shell
npm init -y (instalar o package.json)
npm install (instalar o node_modules)
npm install --save express (instalar o framework)
npm install --save body-parser (converter os dados de uma aquisição, no nosso caso em JSON)
npm install --save mongoose (biblioteca de modelagem de dados do objeto (ODM))
npm install --save nodemon (monitorar todas as alterações nos arquivos de sua aplicação e reiniciar automaticamente o servidor quando for necessário)
```

*O comando *--save*, ele salva as dependências instaladas dentro do nosso arquivo package.json.

## Features

O projeto pode ser usado como modelo para iniciar o desenvolvimento de um projeto Node usando o Express e o Mongo. Ele também demonstra de forma prática como funcionar uma verdadeira APIRestFull.
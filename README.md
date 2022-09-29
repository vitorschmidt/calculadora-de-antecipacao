# Calculadora de antecipação

## Link:

https://calculadora-de-antecipacao.vercel.app/

## Como usar:

Faça o clone do projeto

Abrindo o terminar use o comando:

### `yarn install`

Caso queira rodar a aplicação localmente, use:

### `yarn start`

## Testes:

para verificar os testes da aplicaçã, basta rodar o comando:

### `yarn test`


## Sobre a API:

link da requisição:

https://frontend-challenge-7bu3nxh76a-uc.a.run.app

### Post: 

<img src="https://conteudo-kenzie-fullstack.vercel.app/modulo_6/desafio_frontend/img/documentacao_api.png">

# Simulando Timeout, Internal Server Error e Delay de resposta
Para Timeout basta executar a request post passando timeout através da query string, exemplo: https://frontend-challenge-7bu3nxh76a-uc.a.run.app?timeout

Para Internal Server Error basta executar a request post passando internalError através da query string, exemplo: https://frontend-challenge-7bu3nxh76a-uc.a.run.app?internalError

Para Delay de resposta, que pode ser usado como simulador de conexão lenta, basta executar a request post passando delay, e informando o tempo do delay em milissegundos, exemplo: https://frontend-challenge-7bu3nxh76a-uc.a.run.app?delay=tempoEmMilissegundos

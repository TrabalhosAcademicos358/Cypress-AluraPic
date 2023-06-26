# Cypress - AluraPic

Projeto que foi utilizar no curso de Cypress na plantaforma alura

Fiz algumas modificações pequenas onde vi que seria mais interessante, então conterá pequenas mudanças do original

Para rodar crie um arquivo `cypress.env.json` e adicione dados do usuário para testes na aplicação

```
{
    "userName": "flavio",
    "password": "123"
}
```

Depois rode o `npm install` para instalar todas as dependencias, então após isso vc poderá rodar qualquer um dos comandos npm abaixo:

## Rodar todos os testes sem interface grafica do cypress:

```
npm run test
```

## Rodar todos os testes da api do backEnd sem interface grafica:

```
npm run cy:test-api
```

## Rodar interface grafica do cypress:

```
npm run cy:open
```
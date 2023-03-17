Servidor para o fast chat
Para rodar, basta:
   - Clonar o repositório
   - no terminal, executar o comando: npm install
   - criar um arquivo .env (explicação abaixo)
   - no terminal, executar o comando: node index.js e pronto!


Criar arquivo .env:
Na raiz do projeto, crie um arquivo com o nome .env
Esse arquivo é uma variável de ambiente. Nele você vai colocar apenas uma informação que a biblioteca dotenv
irá substituir no código. Assim, caso você queira mudar o endereço de url do seu cliente, basta alterar esse arquivo .env.

Conteúdo exemplo:

URL="http://localhost:5000/"
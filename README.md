# Notas:
Os arquivos que fiz o codigo estão na pasta "*src*",
tanto no projeto client e server.<br><br>
Server: Criando com Node.js, Typescript, Express, ORM Prisma. Estrutura MVC.<br><br>
Client: Criando com React Native CLI, Typescript, Context Api, React Navigation, Axios, React query... Estrutura MVVM.<br>

Para esse projeto é recomendo usar o "*yarn*" como gerenciador de dependências.

# Client como utlizar:
Se for necessário trocar o número da porta, alterar em "*src/server.ts*" linha 8 "*const port*".<br><br>
1-Abrir a pasta dentro de um terminar e utilizar "*yarn install*" para fazer o download das dependências.

2-Agora é necessário criar a tabela em SQLite, utilizar "*yarn prisma migrate dev*" no terminal.<br>
(Após o comando, será criada em "*src/prisma*")

3-Para criar os Seed e para executar o projeto "*yarn dev*".<br>
(Se a tabela SQLite estiver vazia, irá ser criado automaticamente dados de 01 até 30) 

4-Se tudo der certo, é para aperecer no terminal a seguinte mensagem "*Servidor Online! http://localhost:4000*".

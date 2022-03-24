# Api_Authentication

Objetivo: Desenvolver API em Node com geração de validação de Token.

O projeto está finalizando dentro do escopo proposto (#01,#02,#03,#04)

- [x] #01 - Criar servidor
- [x] #02 - Criar rota post /login que recebe user e password, valida e gera token
- [x] #03 - Criar rota /security que só retorna informações após validar o token
- [x] #04 - Publicar aplicação na Heroku (https://apiauthenticationviictorocha.herokuapp.com/)
- [ ] #05 - Criar rota post /user que recebe user e password, grava na base postgres 

Login
  Request 01
   - rota  : https://apiauthenticationviictorocha.herokuapp.com/login
   - método: post
   - body  : {
               "user": "victor",
               "password": "123"
             }
  Response
    - Status: 200 
    - Body  : eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjoidmljdG9yIiwicGFzc3dvcmQiOiIxMjMiLCJpYXQiOjE2NDgxNDM5NjZ9.-8yiG33_Mr0NkARAL5lEbDcj2lGi1EkQGh0WQxXPEOs

  
Security           
  Request 02
   - rota  : https://apiauthenticationviictorocha.herokuapp.com/security
   - método: get
  Respone
    - Status: 401
    - body : {
               "auth": false,
               "message": "No token provided."
             }
           
  Request 03
   - rota   : https://apiauthenticationviictorocha.herokuapp.com/security
   - método : get
   - Headers: x-access-token      
              eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjoidmljdG9yIiwicGFzc3dvcmQiOiIxMjMiLCJpYXQiOjE2NDgxNDM5NjZ9.-8yiG33_Mr0NkARAL5lEbDcj2lGi1EkQGh0WQxXPEOs
  Respone
    - Status: 200
    - body  : {
                "sistema": {
                "nome": "Api_Authentication",
                "versao": "1.0.0.2",
                "proprietario": "Victor Rocha"
              }





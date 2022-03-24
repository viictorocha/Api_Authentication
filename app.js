const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const security = require('./security.js')

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static("public"))

app.get('/', (req,res,next) =>{
  (async () => {    
      res.status(200).send({
          sistema: {
            nome: 'Api_Authentication',
            versao: '1.0.0.2',
            proprietario: 'Victor Rocha'
          }
        }
      )
    })();
});

app.post("/login", function (req, res) {
  security.login(req, res)
});

app.get('/security',security.verifyJWT,(req, res) => {
  (async () => {    
      res.status(200).send({
        sistema: {
          nome: 'Api_Authentication',
          versao: '1.0.0.2',
          proprietario: 'Victor Rocha'
        }
      })
  })();
});

app.listen(process.env.PORT || 3000, () => console.log("Server ON"));

module.exports = app;
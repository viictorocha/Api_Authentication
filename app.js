const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const security = require('./security.js')

//const rotaSistema  = require('./routes/sistema');
//const rotaUsers    = require('./routes/user');
//const rotaLogin    = require('./routes/login');
//const rotaData     = require('./routes/data');
//const rotaClient   = require('./routes/client');

app.use(bodyParser.urlencoded({ extended: false })); //Aceita apenas dados simples
app.use(bodyParser.json());

app.use(express.static("public"))

app.get("/", function (req, res) {
  res.send("Server ON")
})

app.post("/login", function (req, res) {
  security.login(req, res)
})

app.get("/security", security.verifyJWT,(req, res) => {
  res.send("security")
})



//app.use('/sistema', rotaSistema);
//app.use('/user', rotaUsers);
//app.use('/login', rotaLogin);
//app.use('/data', rotaData);
//app.use('/client',rotaClient)

app.listen(process.env.PORT || 3000, () => console.log("Server ON"));
module.exports = app;
const express = require('express');
const app = express();
const bodyParser = require('body-parser');

const loginRouter = require('./routes/login');

app.use(bodyParser.urlencoded({ extended: false })); //Aceita apenas dados simples
app.use(bodyParser.json());

app.use(express.static("public"))

app.get("/", function (req, res) {
  res.send("Server ON")
})

app.use('/login', loginRouter);

app.listen(process.env.PORT || 3000, () => console.log("Server ON"));
module.exports = app;
const jwt = require("jsonwebtoken");
const chave = "OrganizaDevMiui#2021";

exports.login = (req, res) => {
  
  let validationError = false;
  const { user, password } = req.body;

  if(!user) {
    res.status(400).send("user is not valid");
    validationError = true;
  }
  if(!password) {
    res.status(400).send("password is not valid");
    validationError = true;
  }
  
  const objUser = {
    user: "victor",
    password: "123"
  }

  if (user === objUser.user && password === objUser.password && !validationError){
   jwt.sign(objUser, chave, (err, token) => {
      if (err) {
          res
          .status(500)
          .json({ mensagem: "Erro ao gerar o JWT" });
          return;
        }
        res.send(token);
        res.end();
    });
  } else {
    res.status(401);
    res.end();
  }
}

exports.verifyJWT = (req, res, next) => {
  const token = req.headers['x-access-token'];
  if (!token) return res.status(401).json({ auth: false, message: 'No token provided.' });
  
  jwt.verify(token,chave , function(err, decoded) {
    if (err) return res.status(500).json({ auth: false, message: 'Failed to authenticate token.' });
    next();
  });
};

exports.dataJWT = function(token) {
  return jwt.verify(token, chave);
};
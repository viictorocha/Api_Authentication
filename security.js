const jwt = require("jsonwebtoken");
const chave = "OrganizaDevMiui#2021";

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
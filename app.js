const http = require('http');
const port = process.env.PORT || 3000
const security = require('./security.js')

http.createServer((req, res) => {
  const { url , method} = server;

  if(url === '/' && method === 'GET') {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write('<h1>teste<h1>'); //write a response
    res.end(); //end the response  
  }

  res.writeHead(404, {'Content-Type': 'text/html'});
  res.write("Error, the URL doesn't exist");
  res.end(); //end the response  

  

}).listen(port,() => {
  console.log(`Server running at port `+ port);
});




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
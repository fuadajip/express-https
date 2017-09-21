var fs = require('fs'),
https = require('https'),
express = require('express'),
app = express();

https.createServer({
  key: fs.readFileSync('./sslcert/key.pem'),
  cert: fs.readFileSync('./sslcert/cert.pem'),
  
}, app).listen(3002, ()=>{
  console.log('Listening on port: ' + 3002)
});

app.get('/', function (req, res) {
  res.header('Content-type', 'text/html');
  return res.end('<h1>Hello, Secure World!</h1>');
});
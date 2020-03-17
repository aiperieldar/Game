const http = require('http');
const fs = require('fs')
const url = require('url');
var querystring = require('querystring');
cont figlet = require('figlet')


const server = http.createServer(function(req, res) {
  const page = url.parse(req.url).pathname;
  const params = querystring.parse(url.parse(req.url).query);
  if (page == '/') {
    fs.readFile('index.html', function(err, data) {
      res.writeHead(200, {'Content-Type': 'text/html'});
      res.write(data);
      res.end();
    });
  }
  } else if (page == 'js/main.js'){
      fs.readFile('js/main.js', function(err, data) {
        res.writeHead(200, {'Content-Type': 'text/javascript'});
        res.write(data);
        res.end();
    });
        res.end(JSON.stringify(objToJson));
      }
server.listen(8000);

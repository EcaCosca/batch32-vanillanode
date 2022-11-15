const http = require('http');
let cowsay = require("cowsay");

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
//   res.end('Hello Nizami');
  res.end(cowsay.say({
    text : "I'm heart Maxim",
    e : "oO",
    T : "U "
    }));
// res.end("{user: 'Wictor'}")
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
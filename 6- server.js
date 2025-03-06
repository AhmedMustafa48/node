const http = require("http");

const PORT= 2000;
const hostname = "localhost"


const server = http.createServer((request, response, next) => {
  
});

server.listen(PORT, hostname, () => {
  console.log(`Server is working on http://${hostname}:${PORT}`);
});

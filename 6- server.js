const http = require("http");

const PORT= 2000;
const hostname = "localhost"


const server = http.createServer((request, response, next) => {
  if (request.url === "/about") {
    response.end("<h1>About Page</h1>");
  }
  // console.log(request.url)
  response.end("<h1>Hello World</h1>");
});

server.listen(PORT, hostname, () => {
  console.log(`Server is working on http://${hostname}:${PORT}`);
});
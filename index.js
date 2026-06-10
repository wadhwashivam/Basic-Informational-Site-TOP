import fs from "node:fs";
import { createServer } from "node:http";

const hostname = "localhost";
const port = 8080;

const server = createServer((req, res) => {
  switch (req.url){
    case "/":
      fs.readFile("index.html", "utf8", (err, data) => {
        if (err) {
            res.statusCode = 500;
            res.end("Internal server error");
          return;
        }
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/html');
        res.end(data);
      });
      break;
    case "/about":
      fs.readFile("about.html", "utf8", (err, data) => {
        if (err) {
            res.statusCode = 500;
            res.end("Internal server error");
          return;
        }
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/html');
        res.end(data);
      });
      break;
    case "/contactme":
      fs.readFile("contact-me.html", "utf8", (err, data) => {
        if (err) {
            res.statusCode = 500;
            res.end("Internal server error");
          return;
        }
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/html');
        res.end(data);
      });
      break;
    default:
      fs.readFile("404.html", "utf8", (err, data) => {
        if(err){
            res.statusCode = 500;
            res.end("Internal server error");
            return;
        }
        res.statusCode = 404;
        res.setHeader('Content-Type', 'text/html');
        res.end(data);
      });
      break;
  }
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

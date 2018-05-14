const http = require('http');
const port = 3000;

const requestHandler = (request, response) => {
    console.log(request.url);
    response.end('Hello, NodeJS server\n');
}

const server = http.createServer(requestHandler);

server.listen(port, (err) => {
    if (err) {
        return console.log("Error happened: ", err);
    }

    console.log(`Server is listening on ${port}`);
});
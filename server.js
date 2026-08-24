'use strict';

const http = require('node:http');

const appName = process.env.APP_NAME || 'node-app-2';
const port = Number(process.env.PORT || 3002);
const message = 'Hello from Node.js application two';

const server = http.createServer((request, response) => {
  const isHealthRequest = request.url === '/' || request.url === '/health';
  const body = JSON.stringify({
    app: appName,
    port,
    message,
    status: 'ok'
  });

  response.writeHead(isHealthRequest ? 200 : 404, {
    'Content-Type': 'application/json; charset=utf-8'
  });
  response.end(isHealthRequest ? body : JSON.stringify({ status: 'not_found' }));
});

server.listen(port, '0.0.0.0', () => {
  console.log(`${appName} listening on port ${port}`);
});

// Import the express in typescript file
import express from 'express';
import React from 'react';
import { renderToPipeableStream } from 'react-dom/server';
import App from '../client/App';

// Initialize the express engine
const app: express.Application = express();

// Take a port 3000 for running server.
const port: number = 3000;

// Handling '/' Request
app.get('/', (_req, _res) => {
  const { pipe } = renderToPipeableStream(<App  />, {
    onShellReady() {
      _res.setHeader('content-type', 'text/html');
      _res.write('<html>')
      _res.write(
        `<!DOCTYPE html><head><meta charSet="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <title>My app</title>
        </head>`
      );
      _res.write(`<body><div id="root"></body>`);
      _res.write('</html>')

      pipe(_res);
    },
  });
});

// Server setup
app.listen(port, () => {
  console.log(`React with Express
         http://localhost:${port}/`);
});

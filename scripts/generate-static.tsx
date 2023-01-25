import fs from 'fs';
import { cwd } from 'process';
import React from 'react';
import { renderToPipeableStream } from 'react-dom/server';
import App from '../app/client/App';

const { pipe } = renderToPipeableStream(<App side='statically generated' />, {
  onShellReady() {
    const stream = fs.createWriteStream(`${cwd()}/static/index.html`);
    stream.write(
      `<!DOCTYPE html><head><meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>My statically generated app</title>
      </head>`
    );

    pipe(stream)
  },
});
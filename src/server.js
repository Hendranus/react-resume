import express from 'express';
import React from 'react';
import ReactDOMServer, { renderToString } from 'react-dom/server';
import App from './App';
import Client from './Client';
import Content from './components/Content'
import Button from './components/Button'
import pdf from 'html-pdf';
import fs from 'fs';

const port = 1081;
const server = express();

server.get('/', (req, res) => {

  const body = renderToString(<App />);
  const title = 'Hendranus Resume';

  res.send(
    Client({
      body,
      title
    })
  );
});

server.get('/print', (req, res) => {
    let html = ReactDOMServer.renderToStaticMarkup(<Content>BOOOOOOOOO</Content>);
    console.log(html)
    var options = { format: 'A4' };
    const downloadPath = 'download/resume.pdf'
    pdf.create(html, options).toFile(`./build/${downloadPath}`, function(err, res) {
        if (err) return console.log(err);
        console.log(res);
    });
    res.send(`{ "printed": "OK", "download": "http://localhost:3000/${downloadPath}" }`);
});

server.listen(port);
console.log(`Serving at http://localhost:${port}`);

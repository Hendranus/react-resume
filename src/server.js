import express from 'express';
import React from 'react';
import ReactDOMServer, { renderToString } from 'react-dom/server';
import App from './App';
import client from './client';
import Resume from './components/Resume'
import pdf from 'html-pdf';
import fs from 'fs';

const port = 1081;
const server = express();

server.get('/', (req, res) => {

  const body = renderToString(<Resume/>);
  const title = 'Hendranus Resume';

  res.send(
    client({
      body,
      title
    })
  );
});

server.get('/print', (req, res) => {
    let html = ReactDOMServer.renderToStaticMarkup(<Resume/>);
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

'use strict';

const http          = require('http');


const startHttpServer = (port) => {
  console.log(port);
    return new Promise((resolve, reject) => {
      let server = http.createServer(app).listen(port, function () {
        resolve(server);
      });
    });
  };

exports.startHttpServer       = startHttpServer;
const http = require('http');
const fs = require('fs');

http.createServer((req, res) => {
    if (req.url === '/') {
        fs.readFile('./index.html', (err, data) => {
            if (err) {
                res.writeHead(404)
                res.write('File Not Found')
            } else {
                res.write(data);
            }
            res.end();
        })
    } else if (req.url === '/about') {
        fs.readFile('./about.html', (err, data) => {
            if (err) {
                res.writeHead(404)
                res.write('File Not Found')
            } else {
                res.write(data);
            }
            res.end();
        })
    } else if (req.url === '/contact-me') {
        fs.readFile('./contact-me.html', (err, data) => {
            if (err) {
                res.writeHead(404)
                res.write('File Not Found')
            } else {
                res.write(data);
            }
            res.end();
        })
    } else {
        fs.readFile('./404.html', (err, data) => {
            if (err) {
                res.writeHead(404)
                res.write('File Not Found')
            } else {
                res.write(data);
            }
            res.end();
        })
    }
}).listen(8080);
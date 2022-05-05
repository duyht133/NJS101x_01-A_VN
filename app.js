const http = require('http');

const rqListener = (req,res) =>{
    console.log(req.url, req.method, req.headers);
    /* process.exit(); */ // câu lệnh thoát.
    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<head><title> My firt page </title></head>');
    res.write('<body><h1> hello from my node.js server </h1></body>');
    res.write('</html>');
    res.end();
}

const server = http.createServer(rqListener);

server.listen(3000);
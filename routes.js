const fs = require('fs');
const requestHandler =(req,res)=>{
    const url = req.url;
    const method = req.method;
    if(url === '/'){
        res.write('<html>');
        res.write('<head><title> enter message </title></head>');
        res.write('<body><form action="/message" method="POST"><input type="text" name="message"><button type="submit">Send</button></form></body>');
        res.write('</html>');
        return res.end();
    }
    
    if(url === '/message' && method === 'POST'){
        const body = [];
        req.on('data',(data)=>{
            console.log(data);
            body.push(data);
        })
        req.on('end',()=>{
            const parsedBody = Buffer.concat(body).toString();
            const message = parsedBody.split('=')[1];
            fs.writeFileSync("message.txt",message,(err)=>{
                res.statusCode = 302;
                res.setHeader("location","/")
                return res.end();
            });
        });
    }
    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<head><title> My firt page </title></head>');
    res.write('<body><h1> hello from my node.js server </h1></body>');
    res.write('</html>');
    res.end();
};

/* module.exports =requestHandler */

module.exports = { // ưu tiên sử dụng cách này
   handler: requestHandler,
   sometext:'viet code chay'
};

/* exports.handler = requestHandler;
exports.sometext = 'viet code chay' */
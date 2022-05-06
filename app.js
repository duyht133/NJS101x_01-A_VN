const http = require('http');

const express = require('express');

const app = express(); // tạo biến app cho middleware (cú pháp bắc buộc)

// sử dụng app với middleware use()
app.use((req, res, next) => {
    console.log('In the middleware!');
    next(); // cho phép middleware tiếp tục
});

app.use((req, res, next) => {
    console.log('In another middleware!');
    res.send('<h1>Hello from Express!</h1>');
});

const server = http.createServer(app);
server.listen(3000);
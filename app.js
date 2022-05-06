const express = require("express");
const app = express(); // tạo biến app cho middleware (cú pháp bắc buộc)
const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({ extended: false }));

// sử dụng app với middleware use()
app.use("/", (req, res, next) => {
  next();
});

app.use("/them-sp", (req, res, next) => {
  res.send(
    "<form action='/san-pham'><input type='text' name='title'><button type='submit'>Them SP</button></form>"
  );
});

app.post("/san-pham", (req, res, next) => {
  console.log(req.body);
  res.redirect("/");
});

app.use("/", (req, res, next) => {
  res.send("<h1>xin chao</h1>");
}); // index phải là middleware cuối cùng

app.listen(3000);

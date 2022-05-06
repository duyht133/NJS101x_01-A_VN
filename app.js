const express = require("express");
const app = express(); // tạo biến app cho middleware (cú pháp bắc buộc)

// sử dụng app với middleware use()
app.use("/", (req, res, next) => {
  console.log("chay o day");
  next();
});

app.use("/them-sp", (req, res, next) => {
  console.log("In the middleware!");
  res.send("<h1>add product</h1>");

});

app.use("/", (req, res, next) => {
  console.log("In another middleware!");
  res.send("<h1>xin chao</h1>");
}); // index phải là middleware cuối cùng

app.listen(3000);

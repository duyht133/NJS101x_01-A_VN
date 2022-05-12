//import routes
const shopRoutes = require("./routes/shop");
const adminRoutes = require("./routes/admin");
const errorController = require("./controllers/error")
//import express.
const express = require("express");
const app = express();
//import require patch
const path = require("path");
// Using templace engine ejs
app.set('view engine','ejs'); // ejs template engine
app.set('views','views');
// Using trình phân tích cú pháp( đây là phần body.title mà admin.js sẽ lấy ra để sử dụng)
app.use(express.urlencoded({ extended: false }));
//Thêm đường dẫn CSS tĩnh static (Public là folder chứa file css)
app.use(express.static(path.join(__dirname, 'public')));
//Phân lường đường dẫn, thêm patch /admin làm đường dẫn đầu vào
app.use("/admin", adminRoutes);
app.use(shopRoutes);
app.use(errorController.get404);

app.listen(3000);

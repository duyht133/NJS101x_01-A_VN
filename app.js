const bodyParser = require("body-parser");
const shopRoutes = require("./routes/shop");
const adminData = require("./routes/admin");
const express = require("express");
const app = express();

//import require patch
const path = require("path");

// using templace engine
app.set('view engine','pug'); // pug template engine
app.set('views','views');

app.use(bodyParser.urlencoded({ extended: false }));
//thêm đường dẫn tĩnh static
app.use(express.static(path.join(__dirname, 'public')));

//phân lường đường dẫn, thêm patch /admin làm đường dẫn đầu vào
app.use("/admin", adminData.routes);
app.use(shopRoutes);

app.use((req, res, next) => {
  /* res.status(404).sendFile(path.join(__dirname, "views", "404.html")); */
  
  res.status(404).render("404");
});

app.listen(3000);

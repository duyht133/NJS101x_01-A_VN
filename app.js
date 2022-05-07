const bodyParser = require("body-parser");
const shopRoutes = require("./routes/shop");
const adminRoutes = require("./routes/admin");
const express = require("express");
const app = express();

//import require patch
const path = require("path");

app.use(bodyParser.urlencoded({ extended: false }));

//phân lường đường dẫn, thêm patch /admin làm đường dẫn đầu vào
app.use("/admin", adminRoutes);
app.use(shopRoutes);

app.use((req, res, next) => {
  res.status(404).sendFile(path.join(__dirname, "views", "404.html"));
});

app.listen(3000);

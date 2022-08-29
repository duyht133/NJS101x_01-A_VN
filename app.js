const path = require("path");
const User = require("./models/user");

const express = require("express");
const mongoose = require("mongoose");
// dùng session(phiên làm việc) để connect và kiểm soát login và logout với mongodb
const session = require("express-session");
const MongoDBstore = require("connect-mongodb-session")(session);
// sử dụng csurf để bảo vệ các cuộc tấn công điều hướng req
const csrf = require("csurf");
// sử dụng flash để thay thế hiển thị thông báo tới User
const flash = require("connect-flash");
//sử dụng multer để thêm file
const multer = require("multer");

const MONGODB_URI =
  "mongodb+srv://admin:admin@cluster0.gphjhaw.mongodb.net/?retryWrites=true&w=majority";

const app = express();

// sử dụng session tạo store để connect mongodb
const store = new MongoDBstore({
  uri: MONGODB_URI,
  collection: "sessions",
});

// sử dụng ejs để có thể views trong thư mục views
app.set("view engine", "ejs");
app.set("views", "views");
// sử dụng router để điều hướng trang
const adminRoutes = require("./routes/admin");
const shopRoutes = require("./routes/shop");
const authRoutes = require("./routes/auth");
const errorController = require("./controllers/error");

// phương thức lấy dữ liệu từ body param
app.use(express.urlencoded({ extended: false }));
// cài đặt Multer upload file 
// khai báo nơi lưu trữ file
const fileStorage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "images");
  },
  filename: (req, file, cb) => {
    cb(null, new Date().toISOString() + "-" + file.originalname);
  },
});
app.use(multer({ storage: fileStorage }).single("image")); // image là biến name khai báo trong form input
// dùng path để link với Css
app.use(express.static(path.join(__dirname, "public")));

////////////////////////////////////////
// dùng session
app.use(
  session({
    secret: "my secret",
    resave: false,
    saveUninitialized: false,
    store: store,
  })
);

// dùng csrf
app.use(csrf());

// dùng flash
app.use(flash());

app.use((req, res, next) => {
  if (!req.session.user) {
    return next();
  }
  User.findById(req.session.user._id)
    .then((user) => {
      req.user = user;
      next();
    })
    .catch((err) => console.log(err));
});
// csrf toàn trang
app.use((req, res, next) => {
  res.locals.isAuthenticated = req.session.isLoggedIn;
  res.locals.csrfToken = req.csrfToken();
  next();
});

app.use("/admin", adminRoutes);
app.use(shopRoutes);
app.use(authRoutes);
app.use(errorController.get404);

mongoose
  .connect(MONGODB_URI)
  .then(() => {
    app.listen(3000, () => {
      console.log("server running 3000");
    });
  })
  .catch((err) => console.log(err));

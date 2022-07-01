const path = require("path");
const User = require("./models/user");

const express = require("express");
const mongoose = require("mongoose");
// dùng session(phiên làm việc) để connect và kiểm soát login và logout với mongodb
const session = require("express-session");
const MongoDBstore = require("connect-mongodb-session")(session);
// sử dụng csurf để bảo vệ các cuộc tấn công điều hướng req
const csrf = require("csurf")
const  csrfProtection = csrf();


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

const adminRoutes = require("./routes/admin");
const shopRoutes = require("./routes/shop");
const authRoutes = require("./routes/auth");
const errorController = require("./controllers/error");

// dùng path để link với Css
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

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
app.use(csrfProtection)

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
    app.listen(3000);
  })
  .catch((err) => console.log(err));

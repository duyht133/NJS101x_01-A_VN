const path = require("path");

const express = require("express");
const mongoose = require("mongoose");
// dùng session(phiên làm việc) để connect và kiểm soát login và logout với mongodb
const session = require("express-session");
const MongoDBstore = require("connect-mongodb-session")(session);

const User = require("./models/user");

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

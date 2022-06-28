const path = require("path");

const express = require("express");
const mongoose = require("mongoose");

const User = require("./models/user");

const app = express();

app.set("view engine", "ejs");
app.set("views", "views");

const adminRoutes = require("./routes/admin");
const shopRoutes = require("./routes/shop");
const authRoutes = require('./routes/auth');
const errorController = require("./controllers/error");

app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

app.use((req, res, next) => {
  User.findById("62bb0e9b7b4e52dcfc7df741")
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
  .connect("mongodb+srv://admin:admin@cluster0.gphjhaw.mongodb.net/?retryWrites=true&w=majority")
  .then(() => {
    User.findOne().then((user) => { // lọc điều kiện để tránh tạo user mới mỗi lần reset server
      if (!user) {
        const user = new User({
          name: "Duyht",
          email: "text@mail.com",
          cart: {
            items: [],
          },
        });
        user.save();
      }
    });
    app.listen(3000);
  })
  .catch((err) => console.log(err));

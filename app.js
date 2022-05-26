const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');

const errorController = require('./controllers/error');

const app = express();

// connect by mongoose farmewolrd
/* const mongoose = require('mongoose');
mongoose.connect("mongodb+srv://cluster0.kxxq3.mongodb.net/?authSource=%24external&authMechanism=MONGODB-X509&retryWrites=true&w=majority",()=>console.log('connect data mongodb')); */

// connect mongodb
const mongoConnect = require('./util/database')

// set view engine template.
app.set('view engine', 'ejs');
app.set('views', 'views');

//import routes
/* const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop'); */

//patch CSS.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

// gọi router từ route để hiển thị trang web
/* app.use('/admin', adminRoutes);
app.use(shopRoutes); */

app.use(errorController.get404);

mongoConnect((client)=>{
    console.log(client)
    app.listen('3000')
})
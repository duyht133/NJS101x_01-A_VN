const path = require('path');
const express = require('express');
const app = express();

//set templace engine.
app.set('view engine', 'ejs');
app.set('views', 'views');
//get actions routes from routes folder.
const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');
const errorController = require('./controllers/error');
//use patch link css static
app.use(express.urlencoded({ extended: true }));// encode choice
app.use(express.static(path.join(__dirname, 'public')));
//use actions from routes.
app.use(shopRoutes);
app.use('/admin', adminRoutes);
app.use(errorController.get404);
// active port 3000.
app.listen(3000);

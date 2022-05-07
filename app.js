const bodyParser = require('body-parser');
const shopRoutes = require('./routes/shop');
const adminRoutes = require('./routes/admin');
const express = require('express');
const app = express();

app.use(bodyParser.urlencoded({extended: false}));

//phân lường đường dẫn, thêm patch /admin làm đường dẫn đầu vào
app.use("/admin",adminRoutes);
app.use(shopRoutes);

app.use((req, res, next) => {
        res.status(404).send('<h1>page not found</h1>');
})

app.listen(3000);

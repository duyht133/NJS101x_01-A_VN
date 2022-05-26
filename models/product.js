const getDb = require("../util/database").getDb;

class Product {
  constructor(title, description, price, imageUrl) {
    this.title = title;
    this.description = description;
    this.price = price;
    this.imageUrl = imageUrl;
  }
  save() {
    const db = getDb();
    db.collection("products")
      .insertOne(this)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  }
}
module.exports = Product;

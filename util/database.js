/* const MongoClient = require("mongodb").MongoClient;
const uri = "mongodb+srv://admin:admin@cluster0.kxxq3.mongodb.net/?retryWrites=true&w=majority";

let _db;
const mongoConnect = (callback) => {
  MongoClient.connect(uri)
    .then((client) => {
      console.log("connect");
      _db = client.db();
      callback(client);
    })
    .catch((err) => {
      console.log(err);
      throw err;
    });
};

const getDb = () => {
  if (_db) {
    return _db;
  }
  throw "no database found!";
};

exports.mongoConnect = mongoConnect;
exports.getDb = getDb;
 */
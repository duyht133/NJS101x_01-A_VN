const MongoClient = require("mongodb").MongoClient;
const uri =
  "mongodb+srv://cluster0.kxxq3.mongodb.net/?authSource=%24external&authMechanism=MONGODB-X509&retryWrites=true&w=majority";

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

const getDb = (callback) => {
    if(_db){
        return _db;
    }
    throw 'no database found!'
}

exports.mongoConnect = mongoConnect;
exports.getDb = getDb;


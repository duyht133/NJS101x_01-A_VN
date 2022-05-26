const MongoClient = require("mongodb").MongoClient;
const uri =
  "mongodb+srv://cluster0.kxxq3.mongodb.net/?authSource=%24external&authMechanism=MONGODB-X509&retryWrites=true&w=majority";

const mongoConnect = (callback) => {
  MongoClient.connect(uri)
    .then((client) => {
      console.log("connect");
      callback(client);
    })
    .catch((err) => console.log(err));
};

module.exports = mongoConnect;

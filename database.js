const { MongoClient, ObjectId } = require("mongodb");

// Connection URI
const uri =
  "mongodb+srv://leonardojrr:p53cBo5qLCSrRQ0w@curso-platzi-lwjuh.mongodb.net/test?retryWrites=true&w=majority";

// Database Name
const DB_NAME = "foodblog";

class Mongo {
  constructor() {
    this.client = new MongoClient(uri, { useNewUrlParser: true });
    this.dbname = DB_NAME;
  }

  connect() {
    return new Promise((resolve, rejected) => {
      this.client.connect(err => {
        if (err) rejected(err);
        resolve(this.client.db(this.dbname));
      });
    });
  }

  getAll(collection_name) {
    return this.connect().then(db => {
      return db
        .collection(collection_name)
        .find()
        .toArray();
    });
  }

  get(id, collection_name) {
    return this.connect().then(db => {
      return db
        .collection(collection_name)
        .find({ _id: ObjectId(id) })
        .toArray();
    });
  }

  create(data, collection_name) {
    return this.connect().then(db => {
      return db.collection(collection_name).insertOne(data);
    });
  }

  update(id, data, collection_name) {
    return this.connect().then(db => {
      db.collection(collection_name).updateOne(
        { _id: ObjectId(id) },
        { $set: data },
        { upser: true }
      );
    });
  }

  delete(id, collection_name) {
    return this.connect().then(db => {
      return db.collection(collection_name).deleteOne({ _id: ObjectId(id) });
    });
  }
}

module.exports = { Mongo };

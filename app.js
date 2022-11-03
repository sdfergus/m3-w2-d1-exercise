var MongoClient = require('mongodb').MongoClient;

//nodemongo is the database name
// var url = "mongodb://localhost:27017/nodemongo";
const url = "mongodb://0.0.0.0:27017";

//Connect to the db
MongoClient.connect(url, {
    useNewUrlParser: true, useUnifiedTopology: true
    }, function (err, db) {
        if(err) throw err;
            console.log("Database created!");
            db.close();
    }
);
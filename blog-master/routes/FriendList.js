var express = require('express');
var router = express.Router();

let MongoClient = require('mongodb').MongoClient
let url = "mongodb://localhost:27017";
let db_name = "myBlog";

/* GET users listing. */
router.get('/', function (req, res, next) {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "GET,POST");
    MongoClient.connect(url, {useUnifiedTopology: true}, (err, client) => {
        const collection = client.db(db_name).collection('friend');
        collection.find().toArray((err, result) => {
            var re = result

            res.json({
                msg: "OK",
                data: re
            })
            client.close();
        })
    })
});

module.exports = router;
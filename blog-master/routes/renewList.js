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
        const collection = client.db(db_name).collection('renew');
        collection.find({}, {"renew_date": 1, "renew_des": 1}).sort({"renew_date": -1}).toArray((err, result) => {
            res.json({
                msg: "OK",
                data: result
            })
            client.close();
        })
    })
});

module.exports = router;
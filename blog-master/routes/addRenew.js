let express = require('express');
let router = express.Router();

let MongoClient = require('mongodb').MongoClient
let url = "mongodb://localhost:27017";
let db_name = "myBlog";
router.post('/', (req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "GET,POST");
    console.log(req.body)
    MongoClient.connect(url, {useUnifiedTopology: true}, (err, client) => {
        const collection = client.db(db_name).collection('renew');
        let data = [{
            "renew_date":req.body.renew_date,
            "renew_des":req.body.renew_des
        }];
        collection.insert(data, function (err, result) {
            if (err) {
                console.log('Error:' + err);
            }
        });
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
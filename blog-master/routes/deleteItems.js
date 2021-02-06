let express = require('express');
let router = express.Router();

let MongoClient = require('mongodb').MongoClient
let url = "mongodb://localhost:27017";
let db_name = "myBlog";
router.post('/', (req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "GET,POST");
    console.log(req.body)
    let itemCol = req.body.itemCol
    MongoClient.connect(url, {useUnifiedTopology: true}, (err, client) => {
        const collection = client.db(db_name).collection(itemCol);
        let ObjectId = require('mongodb').ObjectId;

        collection.deleteOne({"_id": ObjectId(req.body.itemId)}, function (err, result) {
            if (!err) {
                console.log("删除成功");
            } else {
                console.log("删除失败");
                console.log('Error:' + err);
            }
        });
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
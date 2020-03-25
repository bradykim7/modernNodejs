const mongodb  = require('mongodb').MongoClient;

const url = "mongodb://127.0.0.1:27017/";

mongodb.connect(url, {useUnifiedTopology: true}, function(error, db){

    if(error){
        throw error;
    }
    // select database
    let database = db.db("Company");
    //find id=1
    let query = { id : 1 };

    //collection will be products
    database.collection("products").find(query).toArray(function(err, result){
        if(err){
            console.log("Query에 오류가 있습니다. ");
            throw err
        };
        console.log(result);
        db.close();
    });

});
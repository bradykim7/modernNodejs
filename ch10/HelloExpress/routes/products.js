const express= require('express');
const router = express.Router();

const mongodb  = require('mongodb').MongoClient;
const url = "mongodb://127.0.0.1:27017/";
const ObjectID = require('mongodb').ObjectID;
/*
const pug = require('pug');
*/
const bodyParser = require('body-parser');

const connectOption = {useNewUrlParser : true,useUnifiedTopology: true};
const dbname ="Company";
const collectionName= "products";

router.use(bodyParser.urlencoded({
    extended:false
}));

router.get('/', function(req, res){
    mongodb.connect(url, connectOption, function(error, db){
        if(error) error;
        let database = db.db(dbname);
        database.collection(collectionName).find({ }).toArray(function(err, result){
            if(err){
                console.log("Query ERR");
                throw err;
            };
            res.render('list.pug',{item:result});
            db.close();
        })

    })
});

router.get('/delete/:id',function(req, res){

    mongodb.connect(url,connectOption, function(error, db) {

        if(error) error;
        let database = db.db(dbname);
        database.collection(collectionName).deleteOne({ _id : ObjectID(req.params.id) }, (err,obj)=>{
            if(err) throw err;
            res.redirect('/');
            db.close();
        })
    })

});

router.get('/insert', function(req, res){
    res.render('insert.pug');
})

router.post('/insert', function(req, res){
    let body =req.body;

    mongodb.connect(url,connectOption,function(error, db){
        if(error) error;
        let database= db.db(dbname);
        database.collection(collectionName).insertOne({id:body.id, name:body.name, modelnumber:body.modelnumber, series:body.series}, (err,obj)=>{
            if(err) throw err;
            res.redirect('/');
            db.close();
        })
    })
});

router.get('/edit/:id',function(req,res){
    mongodb.connect(url,connectOption, function(error, db){
        if(error) error;
        let database = db.db(dbname);
        database.collection(collectionName).findOne({_id : ObjectID(req.params.id)}, function(err, result){
            if(err){
                console.log("Query ERR");
                throw err;
            };
            res.render('edit.pug',{item:result});
            db.close();
        })

    })
})

router.post('/edit/:id',function(req, res){

    mongodb.connect(url,connectOption, function(error,db){
        if(error) error;
        let database =db.db(dbname);
        let query = ObjectID(req.params.id);
        let newvalue = { $set: {id: req.body.id, name: req.body.name, modelnumber:req.body.modelnumber, series:req.body.series } };
        database.collection(collectionName).updateOne({_id: query}, newvalue,function(err, obj){
            if(err) throw err;
            res.redirect('/');
            db.close();
        })
    })
});

module.exports = router;
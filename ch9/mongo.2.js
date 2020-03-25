const mongodb  = require('mongodb').MongoClient;
const url = "mongodb://127.0.0.1:27017/";
const ObjectID = require('mongodb').ObjectID;
const pug = require('pug');
const bodyParser = require('body-parser');

const express= require('express');
const app = express();

app.use(bodyParser.urlencoded({
    extended:false
}));

app.listen(52273, ()=>{
    console.log("Server Running at http://127.0.0.1:52273");
});

app.get('/', function(req, res){
    mongodb.connect(url,{useNewUrlParser : true,useUnifiedTopology: true}, function(error, db){
        if(error) error;
        let database = db.db("Company");
        database.collection("products").find({ }).toArray(function(err, result){
            if(err){
                console.log("Query ERR");
                throw err;
            };
            res.render('list.pug',{item:result});
            db.close();
        })

    })
});

app.get('/delete/:id',function(req, res){

    mongodb.connect(url,{useNewUrlParser : true,useUnifiedTopology: true}, function(error, db) {

        if(error) error;
        let database = db.db("Company");
        database.collection("products").deleteOne({ _id : ObjectID(req.params.id) }, (err,obj)=>{
            if(err) throw err;
            res.redirect('/');
            db.close();
        })
    })

});

app.get('/insert', function(req, res){
    res.render('insert.pug');
})

app.post('/insert', function(req, res){
    let body =req.body;

    mongodb.connect(url,{useNewUrlParser : true,useUnifiedTopology: true},function(error, db){
        if(error) error;
        let database= db.db("Company");
        database.collection("products").insertOne({id:body.id, name:body.name, modelnumber:body.modelnumber, series:body.series}, (err,obj)=>{
            if(err) throw err;
            res.redirect('/');
            db.close();
        })
    })
});

app.get('/edit/:id',function(req,res){
    mongodb.connect(url,{useNewUrlParser : true,useUnifiedTopology: true}, function(error, db){
        if(error) error;
        let database = db.db("Company");
        database.collection("products").findOne({_id : ObjectID(req.params.id)}, function(err, result){
            if(err){
                console.log("Query ERR");
                throw err;
            };
            res.render('edit.pug',{item:result});
            db.close();
        })

    })
})

app.post('/edit/:id',function(req, res){

    mongodb.connect(url,{useNewUrlParser : true,useUnifiedTopology: true}, function(error,db){
        if(error) error;
        let database =db.db("Company");
        let query = ObjectID(req.params.id);
        let newvalue = { $set: {id: req.body.id, name: req.body.name, modelnumber:req.body.modelnumber, series:req.body.series } };
        database.collection("products").updateOne({_id: query}, newvalue,function(err, obj){
            if(err) throw err;
            res.redirect('/');
            db.close();
        })
    })
});

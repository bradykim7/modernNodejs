const express =require('express');
const fs = require('fs');
const pug = require('pug');
const bodyParser = require('body-parser');

// DB Sections
const mongodb = require('mongodb').MongoClient;
const ObjectID = require('mongodb').ObjectID;
const url = 'mongodb://localhost:27017/';
const mongoOptions ={useNewUrlParser : true,useUnifiedTopology: true};
const state ={
    db : null
};
const dbname ="Company";
const connect = (cb) =>{
    if(state.db)
        cb();
    else{
        mongodb.connect(url,mongoOptions,(err,client)=>{
            if(err)
                cb(err);
            else{
                state.db = client.db(dbname);
                cb();
            }

        } )
    }
}
connect();
const getDB = ()=>{return state.db();};

// Server Sections
const port = 52273;
const app = express();



app.use(bodyParser.urlencoded({extended: false}));
app.set('view engine', 'pug');
app.listen(port, ()=>{console.log("Server Running at http://127.0.0.1:52273")});






app.get('/', function(req, res){


    getDB().collection("products").find({ }).toArray((error,docs)=>{
        if(error) throw res.json(error);
        else{
            res.render('list.pug', {items:docs});
        }
    })
});

app.get('/delete/:id', function (req, res) {

});

app.get('/insert', function (req, res) {

});

app.post('/insert', function(req, res){

});

app.get('/edit/:id', function(req, res){

});

app.post('/edit/:id', function(req, res){

});

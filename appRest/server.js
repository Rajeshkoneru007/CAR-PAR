var express = require('express')
var morgan = require('morgan');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

var par = require('./routes/par')

var app = express();

/*Middleware*/
app.use(morgan('combined'));
app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Methods", "DELETE,PUT,GET,POST");
    next();
});

app.use('/api',par);

/*Connecting MongoDB*/
mongoose.connect('mongodb://localhost/par-db');
mongoose.set('debug', true);
mongoose.set('debug', function (coll, method, query, doc) {
    console.log(coll, method, query, doc);
   });
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
    console.log("RK")
});

app.listen(18000, function () {
    console.log('Example app listening on port 18000!')
})
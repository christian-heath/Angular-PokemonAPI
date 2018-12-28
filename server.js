var express = require('express');
var mongoose = require('mongoose');
var app = express();
const session = require('express-session');
const flash = require('express-flash');
var bodyParser = require('body-parser');
var path = require('path');

app.use(bodyParser.urlencoded({extended: true}));
app.use(flash());
app.use(session({
    secret: 'itsasecret',
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 6000 }
}))
app.use(express.static( __dirname + '/public/dist/public' ));
app.set('view engine', 'ejs');
app.set('trust proxy', 1);


app.get('/', function (req, res) {
    res.render('index');
})


app.listen(8000, function () {
    console.log("listening on port 8000");
})
var express = require('express');
var app = express();
app.use(express.static('dist'))
const  {Admin}=require("./funcs/admin")



const bodyParser=require("body-parser")

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json({limit: '50mb'}))



Admin(app)
app.get('/', function(req, res) {
    res.render('index');
});

// set the view engine to ejs
app.set('view engine', 'ejs');
app.listen(8000);

var express = require('express');
var imagenes=require('./routes/imagenes');
var bodyParser = require('body-parser')

var app = express();
var cors = require('cors');
 app.use(cors({origin: '*'}));
let port= process.env.PORT ||8090;
app.use( bodyParser.json() );       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
})); 

app.get('/imagenes', imagenes.findAll);
app.get('/imagenes/:palabra/:numero', imagenes.findByName);
app.post('/imagenes',imagenes.findInSquare);

app.listen(port);

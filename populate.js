var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
var async= require("async");


function Get(yourUrl) {
    var Httpreq = new XMLHttpRequest(); // a new request
    Httpreq.open("GET", yourUrl, false);
    Httpreq.send(null);
    return Httpreq.responseText;
}
var y = -1;
var index=1;
var apiKey="6wtdtsfmgubq2yvpyrf4fsgj";
var apiSecret="HGYTtCXc4MbjmrcdY9qR3AsQ8uGBpCSJnB8gGdhrdMTxW";
var username="jairo612";
var password="u7u7uryte";
var aBuscAR="movies";

var api = require("gettyimages-api");
var creds = { apiKey: apiKey, apiSecret: apiSecret, username: username, password: password };
var client = new api (creds);

var tot=0;
var jasonOb=new Array();
var maxPage=100;
var maxTotal=100;

async.whilst(function () {
  return tot < maxTotal;
},
function (next) {
 	var x = 1;
	client.search().images().withPage(index).withPageSize(maxPage).withPhrase(aBuscAR)
    .execute(function(err, response) {
        if (err) throw err
     imagenes=response.images;
    for(var a in imagenes)
    {
    var  subImagen= { 'x': x, 'y': y, 'snippet':imagenes[a].caption, 'title': imagenes[a].title,'url':imagenes[a].display_sizes[0].uri };
    jasonOb.push(subImagen);
    console.log(subImagen);
   	x++;
   	}
    y--;
    tot++;
    index++;
    next();
    }); 
},
function (err) {
  // All things are done!
  	console.log('Termino')
  	jasonOb=JSON.stringify(jasonOb);
    var fs = require('fs');
    var file = fs.createWriteStream('array.json');
    file.on('error', function(err) { /* error handling */ });
    file.write(jasonOb); 
    file.end();
});


	

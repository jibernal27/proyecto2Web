	var MongoClient = require('mongodb').MongoClient,
	    assert = require('assert');

	var url = 'mongodb://jairo:1@ds145299.mlab.com:45299/proyecto2';


	function getImagenes(query, callback) {
	    MongoClient.connect(url, function(err, db) {
	        assert.equal(null, err);
	        console.log("Connected successfully to Mongo");
	        var imagenes = db.collection("imagenes");
	        imagenes.find(query).toArray(function(err, docs) {
	            assert.equal(err, null);
	            //console.log("Found the following records");
	            console.log(docs);
	            callback(docs);
	            db.close();
	        });
	    });
	};

	function getRandomImagenes(query, callback) {
	    MongoClient.connect(url, function(err, db) {
	        assert.equal(null, err);
	        console.log("Connected successfully to Mongo");
	        var imagenes = db.collection("imagenes");
	        imagenes.aggregate([{ $sample: { size: query } }]).toArray(function(err, docs) {
	            assert.equal(err, null);
	            //console.log("Found the following records");
	            //console.log(docs);
	            callback(docs);
	            db.close();
	        });
	    });
	};
	function getImagenesPorFiltro(query, callback) {
	    MongoClient.connect(url, function(err, db) {
	        assert.equal(null, err);
	        console.log("Connected successfully to Mongo");
	        var imagenes = db.collection("imagenes");
	        imagenes.aggregate([{ $match:query.filtro},{ $sample: { size: parseInt(query.cantidad) } }]).toArray(function(err, docs) {
	            assert.equal(err, null);
	            //console.log("Found the following records");
	            //console.log(docs);
	            callback(docs);
	            db.close();
	        });
	    });
	};


	exports.findAll = function(req, res) {
	    getImagenes({},
	        function(imagenes) {
	        	res.header('Access-Control-Allow-Origin', '*');
	            res.json(imagenes);
	        });

	};

	exports.findByName = function(req, res) {

	    var nombre = req.params.palabra;
	    var num=req.params.numero;
	    var snippet = {};
	    var title = {};
	    snippet['snippet'] = new RegExp('.*' + nombre);
	    title['title'] = new RegExp('.*' + nombre);

	    var filtro = { '$or': [snippet, title] };
	    query={};
	    query['cantidad']=num;
	    query['filtro']=filtro;
	    console.log(query);
	    getImagenesPorFiltro(query,
	        function(imagenes) {
	        	 console.log("Obtenidas por nombre " + imagenes.length);
	        	 res.header('Access-Control-Allow-Origin', '*');
	            res.json(imagenes);
	        });

	};


	exports.findInSquare = function(req, res) {
		
    		var query = req.body;
		try{
	    console.log('Retriving images: ' + JSON.stringify(query));

	    // Con Postgres esto sale en 3 lineas :'(
		
	    var rta = [];
	    var numImagenes = query.num;
	    var xCentro = query.x;
	    var yCentro = query.y;
	    var dis = Math.ceil(Math.sqrt(numImagenes));
	     var dis=Math.ceil(dis/ 2);

	    var filtroPos = {};
	    filtroPos['x'] = { $gte: xCentro - dis, $lt: xCentro + dis };
	    filtroPos['y'] = { $gte: yCentro - dis, $lt: yCentro + dis };
	    console.log(JSON.stringify(filtroPos));

	    getImagenes(filtroPos,
	        function(imagenes) {

	            for (var element in imagenes) {
	                rta.push(imagenes[element]);
	            }
	            console.log("Filtro por cuadrado " + imagenes.length);

	            if (rta.length < numImagenes) {

	                getRandomImagenes(numImagenes - rta.length,
	                    function(imagenes) {

	                        for (var element in imagenes) {
	                            rta.push(imagenes[element]);
	                        }
	                        console.log("Filtro por muestras " + imagenes.length);
							res.header('Access-Control-Allow-Origin', '*');
	                        res.json(rta);
	                    });

	            } else {
	                while (rta.length != numImagenes) {
	                    rta.pop();
	                }
	                res.header('Access-Control-Allow-Origin', '*');
	                res.status(200).json(rta);
	            }
	    }
		catch(err){
		    res.status(500).send(err);
	    }


	        });




	};

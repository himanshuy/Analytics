var http = require('http'),
    express = require('express'),
    request = require('request');

var app = express();
    app.set('view engine', 'html');
    app.set('views', __dirname + '/views');
    app.use(express.static(__dirname, '/public'));
    app.engine('html', require('hbs').__express);
    
    app.use( express.compress() );
    app.use( express.urlencoded() );
    app.use( express.json() );

    //Add headers
    app.use(function (req, res, next) {
        
        res.setHeader('Access-Control-Allow-Origin', '*');
        // Allowed Request methods
        res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
        //Allowed Request Headers
        res.setHeader('Access-Control-Allow-Headers', '*');
        //Allowing cookies
        res.setHeader('Access-Control-Allow-Credentials', true);
        
        next();
    });

 var port = process.env.PORT || 3000;

 app.listen(port, function(){
     console.log('Listening for requests');
 });

 app.get('/', function(req, res){
     res.render('index');
 });

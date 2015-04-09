var http = require('http');
var express = require('express');
var bodyParser = require('body-parser');

var app = express();
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());


var env = process.env.NODE_ENV = process.env.NODE_ENV || 'development';
app.set(express.static(__dirname+'/public'));
app.set('views',__dirname+"server/views");

app.get('*',function(req,resp) {
	console.log("The requested url is "+req.url);
	resp.end();
});

var server=http.createServer(app);
server.listen(3000);
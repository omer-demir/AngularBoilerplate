var http = require('http');
var express = require('express');
var bodyParser = require('body-parser');
var path=require('path');
var favicon=require('serve-favicon');
var app = express();

app.set('view engine','vash');
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use(favicon(path.normalize(__dirname+'/..')+'/public/favicon.ico'));


var env = process.env.NODE_ENV = process.env.NODE_ENV || 'development';
app.use(express.static(path.normalize(__dirname+'/..')+'/public'));

app.set('views', path.normalize(__dirname+'/..') + '/server/views');
//app.set('views',__dirname+"views");

app.get('/',function(req,resp) {
	console.log("Request handled for url: "+req.url);
	resp.render('index');
});

var server=http.createServer(app);
server.listen(4000);
console.log("Server started to listen 4000 port. Changes ");
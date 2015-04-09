var http = require('http');
var express = require('express');
var bodyParser = require('body-parser');

var app = express();
app.use(bodyParser({
    extended: true
}));

var env = process.env.NODE_ENV = process.env.NODE_ENV || 'development';
app.set(express.static(__dirname+'public'));
app.set('views',__dirname+"server/views");

app.get('*',function(req,resp) {
	console.log("The requested url is "+req.url);
});

var server=http.createServer(app);
server.listen(3000);
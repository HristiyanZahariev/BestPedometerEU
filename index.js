var express = require('express');
var bodyParser = require('body-parser');
var app = express();

app.set('port', (process.env.PORT || 5000));

app.use(express.static(__dirname + '/public'));

// views is directory for all template files
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.get('/', function(request, response) {
  response.send("hello")
});

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});

var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'us-cdbr-iron-east-03.cleardb.net',
  user     : 'b8113da7ef3f58',
  password : '2f4cd18b',
  database : 'heroku_2ddbb6dcb252ea7'
});

connection.connect();

app.post('/score', function(req, res) {
	var query = "INSERT INTO users (steps) VALUES (" + req.body.score + ")";
	connection.query('UPDATE users SET ? WHERE ?', [{ steps: req.body.score }, { id: 1 }])
	res.send("updated")
	console.log("Request came")
	console.log(req.body)
});



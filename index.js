var express = require('express');
var bodyParser = require('body-parser');
var app = express();

app.set('port', (process.env.PORT || 5000));

app.use(bodyParser.json())
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
var pool  = mysql.createPool({
  connectionLimit : 10,
  host     : 'us-cdbr-iron-east-03.cleardb.net',
  user     : 'ba81d2773e784b',
  password : 'ac751f1c5bba42a',
  database : 'heroku_b0c0e2e242faeba'
});

app.post('/score', function(req, res) {
	var query = "INSERT INTO users (steps) VALUES (" + req.body.score + ")";
	pool.query('UPDATE users SET ? WHERE ?', [{ steps: req.body.score }, { id: 1 }])
	res.send("updated")
	console.log("Request came")
	console.log(req.body)
});



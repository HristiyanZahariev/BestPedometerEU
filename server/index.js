var express = require('express')
var bodyParser = require('body-parser');
var app = express()

app.use(bodyParser.json());
app.get('/', function (req, res) {
  res.send('Hello World')
})

app.listen(3000)


var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'Djicaka951',
  database : 'BestPedometerEU'
});

connection.connect();

app.post('/score', function(req, res) {
	var query = "INSERT INTO users (steps) VALUES (" + req.body.score + ")";
	connection.query('UPDATE users SET ? WHERE ?', [{ steps: req.body.score }, { id: 1 }])
	res.send("updated")
	console.log("Request came")
	console.log(req.body)
});

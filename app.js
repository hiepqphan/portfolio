var express = require('express');
var app = express();

app.use(express.static('public'));
app.set('view engine','ejs');

app.get('/', function(req, res) {
  res.render('home');
});

app.get('/skills', function(req, res) {
  res.render('skills');
});

app.get('/work', function(req, res) {
  res.render('work');
});

app.get('/colorgame', function(req, res) {
  res.render('colorgame');
});

var PORT = process.env.PORT || 5000;

app.listen(PORT, function() {
    console.log('Server is running...');
});

var express = require('express');
var morgan = require('morgan');
var path = require('path');
var stylus = require('express-stylus');
var koutoSwiss = require('kouto-swiss');
var jeet = require('jeet');

var app = express();
var publicDir = path.resolve(__dirname + '/public');

app.use(morgan("default"));
app.use(stylus({
  src: publicDir,
  use: [koutoSwiss(), jeet()],
  import: ['kouto-swiss', 'jeet']
}));

app.engine('ejs', require('ejs').renderFile);
app.set('view engine', 'ejs');

app.use(express.static(__dirname + '/public'));


app.get('/', function(req, res, next){
  res.render('index');
});

app.listen(3000, function(){
  console.log('listen to port 3000');
});
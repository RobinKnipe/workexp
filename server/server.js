var express = require("express");
var hogan = require("hogan-express");
var morgan = require("morgan");

var app = express();
app.use(morgan('default'));

app.set('views', require("path").resolve('./views'));
app.set('view engine', 'html');
app.engine('html', hogan);

app.get('/', function (req, res) {
    // res.render('test', req.query);
    res.send('Data received');
    console.log(req.query);
});
app.get('/err', function (req, res) {
    // res.render('test', req.query);
    res.status(500).send('ERROR: Problems!');
});
app.get('/temp', function (req, res) {
    res.render('temp', req.query);
});

app.listen(8080);
console.log('app started');
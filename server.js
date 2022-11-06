var express = require("express");
var session = require("express-session");

var app = express();
app.use(session({secret:'codigosecreto'}));

app.use(express.static(__dirname + "/static"));
app.use("/recursos", express.static(__dirname + "/public"));

app.set('view engine', 'ejs');
app.set('views', __dirname + '/views'); 

app.get('/', function(req, res) {
    req.session.cuenta = req.session.cuenta ? req.session.cuenta + 1 : 1 
    res.render('contador', {contador:req.session.cuenta});
})
 
app.post('/suma', function (req, res){
    req.session.cuenta = req.session.cuenta + 1;
    res.redirect('/');
  })

  app.post('/reinicio', function (req, res){
    req.session.cuenta = 0;
    res.redirect('/');
  })

app.listen(8000, function() {
    console.log("listening on port 8000");
}) 
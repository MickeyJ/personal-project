var express = require('express'),
    http    = require('http'),
    path    = require('path'),
    app     = express();


// ************************************
//              Port
// ************************************
var port = process.env.PORT || 9000;
app.set('port', port);


// ************************************
//             Routes
// ************************************
var past    = require('./routes/past');
var future  = require('./routes/future');

app.use('/', past);
app.use('/', future);


// ************************************
//             Views
// ************************************
app.set('views', __dirname + '/views');
app.set('view engine', 'jsx');
app.use(express.static(path.join(__dirname)));
app.engine('jsx', require('express-react-views').createEngine());



// ******************************************
//                Server
// ******************************************
var server = http.createServer(app).listen(port, function(){
  console.log('listening: ' + port);
});
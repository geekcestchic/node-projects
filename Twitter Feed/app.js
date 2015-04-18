var express = require('express');
var path = require('path');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var router = express.Router();
var server = require('http').createServer(app);

var routes = require('./routes/index')
var twit = require('./routes/twit')

var app = express();

//view engine setup
app.set('view engine', 'jade');
app.set('views','./views');

app.use('/',routes);
app.use('/twit',twit)
// app.use(morgan('dev'));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

var port = process.env.PORT || 3000;
server.listen(port);
console.log('Server started on '+port);

//Twitter Setup
var Twit = require('twit');
var twitter = new Twit({
  consumer_key: 'HmdlciikP7hXlumjdwzOXHS21',
  consumer_secret: 'TjUaA0i7g29KFMg3Ciwlk4kt1vDnLCQjVZhvwf3AG2oRibPhdd',
  access_token: '80485510-Tm3pOqOgdWRr3WUtwxUUFCljuH82JL7Tj7C4lcGNZ', 
  access_token_secret: 'r5TlE5RImeHJf5s71toVy9DRUPqzYgPdlD3DViinJvCDf'
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});




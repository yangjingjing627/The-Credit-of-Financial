require('shelljs/global');
var path = require('path');
var express = require('express');
var opn = require('opn');
var proxyMiddleware = require('http-proxy-middleware');
var config = require('./config');
var port = process.env.PORT || config.dev.port;
var proxyTable = config.dev.proxyTable;

var app = express();

//proxy api requests
Object.keys(proxyTable).forEach(function (context) {
  var options = proxyTable[context]
  if (typeof options === 'string') {
    options = { target: options }
  }
  app.use(proxyMiddleware(context, options));
})

// handle fallback for HTML5 history API
//app.use(require('connect-history-api-fallback')());

// serve pure static assets
var staticPath = path.posix.join(config.dev.assetsPublicPath, config.dev.assetsSubDirectory);
app.use(staticPath, express.static('./'));

app.get('/', function(req, res){
  res.send('hello world');
});

module.exports = app.listen(port, function (err) {
  if (err) {
    console.log(err);
    return;
  }
  console.log('Listening at ' + uri + '\n');
  var uri = 'http://localhost:' + port;  
  opn(uri)
})

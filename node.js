var express = require('express'),
    connect = require('connect'),
    path = require('path'),
    sr   = require('ukijs/tools/static_require'),
    fs   = require('fs');

var HOST = '0.0.0.0',
    PORT = 8001;

app = express.createServer();
app.configure(function() { 
    app.use(connect.bodyParser()); 
});

app.get('/', sr.getAppHandler('Learn js', 'app.js'));

app.get('/vendor/*', function(req, res){
    res.sendfile(req.url.substring(1));
});

app.get('/*.js', sr.getHandler({
    searchPaths: [fs.realpathSync(__dirname)].concat(require.paths),
    serverRoot: __dirname
}));

app.get('/*', function(req, res) {
    res.sendfile(req.param(0));
});

require('util').puts("Server at http://" + HOST + ":" + PORT + "/");
app.listen(PORT, HOST);

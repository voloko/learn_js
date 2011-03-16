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

app.post('/eval', function(req, res) {
    fs.readFile(path.join(__dirname, 'runner.html'), 'utf-8', function(err, code) {
        code = code.replace(
            /<!-- eval -->(.|\n)*<!-- #eval -->/, 
            '<script>' + req.body.code + '</script>'
        );
        res.writeHead(200, { 
            "Content-Type": 'text/html',
            "Content-Length": code.length
        });
        res.end(code);
    });
});

app.get('/vendor/*', function(req, res){
    res.sendfile(req.url.substring(1));
});

app.get('/*.js', sr.getHandler({
    searchPaths: [fs.realpathSync(__dirname)].concat(require.paths),
    serverRoot: __dirname
}));

require('util').puts("Server at http://" + HOST + ":" + PORT + "/");
app.listen(PORT, HOST);

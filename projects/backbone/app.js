var express = require('express');
var path = require('path');
var app = express();

app.use(express.static('public'));

app.get('/', function (req, res) {
    res.send('Backbone!');
});

app.get('/*.html', function (req, res) {
    var options = {
        root: path.join(__dirname, '/view'),
        headers: {
            'x-timestamp': Date.now(),
            'x-sent': true
        }
    };

    var filePath = req.path;

    res.sendFile(filePath, options, function(err){
        if(err){
            res.status(err.status).end();
        }

        console.log(filePath);
    });
});

var server = app.listen(3000, '127.0.0.1', function(){
    var host = server.address().address;
    var port = server.address().port;
    console.log('Example app listening at http://%s:%s', host, port);
});

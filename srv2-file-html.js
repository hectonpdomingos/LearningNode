var express = require('express');
var app = express();
var path = require('path');

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname + '/index.html'));
});
app.get('/readme/', function (req, res) {
    res.sendFile(path.join(__dirname + '/readme.html'));
});

app.listen(5000);
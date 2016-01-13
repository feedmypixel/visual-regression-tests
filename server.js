'use strict';

var express = require('express');
var app = express();
var port = process.env.PORT || 8090;

app.use(express.static(__dirname + '/public'));

app.listen(port, function () {
    console.log('listening on port: ' + port);
});
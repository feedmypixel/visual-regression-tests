'use strict';
//https://github.com/webdriverio/webdrivercss

var webdriverio = require('webdriverio');
var webdrivercss = require('webdrivercss');
var port = process.env.PORT || 8090;

var client = webdriverio.remote({
    desiredCapabilities: {
        browserName: 'firefox'
    }
});

webdrivercss.init(client, {
    screenshotRoot: 'visualRegression'
});

client
    .init()
    .url('http://localhost:' + port)
    .webdrivercss('test', [{
        name: 'header',
        elem: 'body .h1'
    }])
    .end();

var WebdriverIO = require('webdriverio'),
    WebdriverCSS = require('webdrivercss');

var client = WebdriverIO.remote({
    desiredCapabilities: {
        browserName: 'firefox'
    }
});

WebdriverCSS.init(client, {
    screenshotRoot: 'visualRegression',
    api: 'http://localhost:9000/api/repositories/'
});

client
    .init()
    .sync()
    .url('http://localhost:8090/')
    .webdrivercss('exampleTest', {
            name: 'homepage',
        }
    )
    .sync()
    .end();

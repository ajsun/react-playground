'use strict'
let express = require('express')
let bodyParser = require('body-parser');
let path = require('path');

let app = express()

var cfenv = require('cfenv');
var appEnv = cfenv.getAppEnv();

app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded
app.use('/public', express.static(path.join(__dirname, '/src/public')));
app.use('*', (req, res) => {
        res.sendFile(path.join(__dirname, '/src/index.html'));
    }
);

let appPort = appEnv.port || 3000

app.listen(appPort, '0.0.0.0', function() {
  // print a message when the server starts listening
  console.log("server starting on " + appPort);
});

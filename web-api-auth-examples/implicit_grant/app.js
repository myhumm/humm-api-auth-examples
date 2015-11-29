/**
 * This is an example of a basic node.js script that performs
 * the Implicit Grant oAuth2 flow to authenticate against
 * the Humm Accounts.
 *
 * For more information, read
 * {{}}
 */

var express = require('express'); // Express web server framework
var app = express();
app.use(express.static(__dirname + '/public'));
console.log('Listening on 8888');
app.listen(8888);


/*
//get code or token from window.location and extract keys and stores in localstorage
app.get('/complete-auth', function(req, res) {
    res.render('completeAuth.html');
});*/

/**
 * This is an example of a basic node.js  that performs
 * the Implicit Grant oAuth2 flow to authenticate against
 * the Humm Accounts.
 *
 * For more information, read
 * {{}}
 */

var express = require('express'); // Express web server framework
var app = express();


app.use(express.static(__dirname + '/public'));
app.engine('html', require('ejs').renderFile);
console.log('Listening on 3000');
app.listen(3000);


//get code or token from window.location and extract keys and stores in localstorage
app.get('/complete-auth', function(req, res) {
    res.render('completeAuth.html');
});
/**
 * This is an example of a basic node.js script that performs
 * the Authorization Code oAuth2 flow to authenticate against
 * the Humm Accounts.
 *
 * For more information, read
 * {{link}}
 */

var express = require('express'), // Express web server framewor
    humm    = require('humm'), // Express web server framework,
    request = require('request'), // "Request" library
    app     = express();

app.set('view options', { layout: false });
app.use(express.static(__dirname + '/public'));
app.engine('html', require('ejs').renderFile);

app.get('/access-token', function(req, res) {
  var code = req.query.code;

    console.log('------------Requesting Grant Via Code ------------');
    console.log(code);

  // init humm with client_id
   /* humm.init({
        client_id: '56570bacae8c5087411778a3',
        client_secret: 'CdNX3TcLc/OF3k2oIogwlBi/rCZOP0LSfLxrRjoX5EA='
    });*/

    var authOptions = {
        url: 'http://api.myhumm.com/token',
        form: {
            client_id: '56570bacae8c5087411778a3',
            client_secret: 'CdNX3TcLc/OF3k2oIogwlBi/rCZOP0LSfLxrRjoX5EA=',
            grant_type: 'authorization_code',
            code: code
        },
      /*  headers: {
            Authorization: 'Basic ' + (new Buffer('56570bacae8c5087411778a3:CdNX3TcLc/OF3k2oIogwlBi/rCZOP0LSfLxrRjoX5EA=').toString('base64'))
        },*/
        json: true
    };

    request.post(authOptions, function(error, response, body){

        console.log('error: ' + error);
        console.log('response.statusCode: ' + response.statusCode);
        console.log('body: ' + body);
        console.log(response);
/*    if(!error && response.statusCode === 200){

            console.log('body');
            console.log(body);
            console.log(response);ß
        }*/

    });


/*
   humm.accessViaCodeGrant(code, function(error, response) {
    console.log('------------- accessViaCodeGrant complete -------------');
    console.log(error);
    console.log(response);
  });
*/





/*    humm.authViaClientCredentials( function(error, response) {
    console.log('------------- authViaClientCredentials complete -------------');
    console.log(error);
    console.log(response);
  });*/

  /*  humm.radio(function(error, response) {
    console.log('------------- accessViaCodeGrant complete -------------');
    console.log(error);
    console.log(response);
  })*/

});

//get code or token from window.location and extract keys and stores in localstorage
app.get('/complete-auth', function(req, res) {
  res.render('completeAuth.html');
});

app.get('/refresh_token', function(req, res) {

  // requesting access token from refresh token
  var refresh_token = req.query.refresh_token;


/*  var authOptions = {
    url: 'https://accounts.spotify.com/api/token',
    headers: { 'Authorization': 'Basic ' + (new Buffer(client_id + ':' + client_secret).toString('base64')) },
    form: {
      grant_type: 'refresh_token',
      refresh_token: refresh_token
    },
    json: true
  };

  request.post(authOptions, function(error, response, body) {
    if (!error && response.statusCode === 200) {
      var access_token = body.access_token;
      res.send({
        'access_token': access_token
      });
    }
  });*/
});

console.log('Listening on 3000');
app.listen(3000);

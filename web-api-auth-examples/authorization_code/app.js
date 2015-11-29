/**
 * This is an example of a basic node.js script that performs
 * the Authorization Code oAuth2 flow to authenticate against
 * the Humm Accounts.
 *
 * For more information, read
 * {{link}}
 */

var express = require('express'), // Express web server framewor
    humm    = require('humm'), // Express web server framework
    app     = express();

app.set('view options', { layout: false });
app.use(express.static(__dirname + '/public'));
app.engine('html', require('ejs').renderFile);


//Get Access token with auth code
app.get('/access-token', function(req, res) {
  var code = req.query.code;

    console.log('------------Requesting Grant Via Code ------------');
    console.log(code);

  // init humm with client_id
    humm.init({
        client_id: '56570bacae8c5087411778a3',
        client_secret: 'CdNX3TcLc/OF3k2oIogwlBi/rCZOP0LSfLxrRjoX5EA='
    });


    //request access token with code
   humm.accessViaCodeGrant(code, function(authErr, authRes) {
    console.log('------------- accessViaCodeGrant complete -------------');
    console.log('authErr');
    console.log(authErr);
    console.log('AuthRes');
    console.log(authRes);

       if(!authErr && authRes) {

           /** Sample auth res:
            * { access_token: '565b0c78015f91c91a9882ea',
                expires_in: 2592000,
                token_type: 'Bearer',
                refresh_token: 'c4be4384dea6c19c7cc37206d2b6aac4c4be4384dea6c19c7cc37206d2b6aac4',
                scope: null }
            *
            */
           //set token before request
           humm.setAccessToken(authRes.access_token);
           //get current user
           humm.users.me(function(meErr, meRes){
               console.log('--------------------- users.me()----------');
               console.log(meErr);
               console.log(meRes);
               //send response back
               res.send({ auth: authRes,  me: meRes });
           });
       }else {
           console.log(authErr);
           console.log(authRes);
         //  throw new Error('Authorization attempt failed');
       }
  });
});

//get code or token from window.location and extract keys and stores in localstorage
app.get('/complete-auth', function(req, res) {
  res.render('completeAuth.html');
});

app.get('/refresh_token', function(req, res) {

  // requesting access token from refresh token
  var refresh_token = req.query.refresh_token;

    console.log('------------Requesting refresh_token ------------');
    console.log(refresh_token);

    // init humm with client_id
    humm.init({
        client_id: '56570bacae8c5087411778a3',
        client_secret: 'CdNX3TcLc/OF3k2oIogwlBi/rCZOP0LSfLxrRjoX5EA='
    });

    humm.refreshAccessToken(refresh_token, function(reErr, reRes){
        console.log('--------------------- refresh_token()----------');
        console.log(reErr);
        console.log(reRes);
        res.send(reRes.data_response);
    });
});

console.log('Listening on 3000');
app.listen(3000);

/**
 * This is an example of a basic node.js  that performs
 * the Client Credentials to authenticate against
 * the Humm Accounts.
 *
 * For more information, read
 * http://developers.myhumm.com/web/auth-guide#auth-client
 */

humm = require('humm');

// init humm with client_id
humm.init({
    client_id: '56570bacae8c5087411778a3',
    client_secret: 'CdNX3TcLc/OF3k2oIogwlBi/rCZOP0LSfLxrRjoX5EA='
});

//request access token with code
console.log('----------starting request------');
humm.authViaClientCredentials(function(err, res) {
    console.log('------------- authViaClientCredentials complete -------------');
    console.log('authErr');
    console.log(err);
    console.log('AuthRes');
    console.log(res);

    //set token for future request
    humm.setAccessToken(res.data_response.access_token);

    //make authorised here....

});






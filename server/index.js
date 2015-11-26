

Meteor.methods({

    getMe: function getMe(code) {

        // init humm with client_id
        humm.init({
            client_id: '56570bacae8c5087411778a3',
            client_secret: 'CdNX3TcLc/OF3k2oIogwlBi/rCZOP0LSfLxrRjoX5EA='
        });


        /**
         * TODO:  workaround return value being {code: "{"data":"vogAUr3qdCJ9z1ZhDcLjq5J/TtyeVpHjUcuj erzW10="}"}
         * instead of  {code: "vogAUr3qdCJ9z1ZhDcLjq5J/TtyeVpHjUcuj erzW10="}
         */
        var parsedCode = JSON.parse(code);

        console.log(parsedCode);

        //show pop up to enable user to login to hum
        humm.accessViaCodeGrant(parsedCode.data, function(error, response) {
            console.log('------------- accessViaCodeGrant complete -------------');
            console.log(error);
            console.log(response);

     /*       //set access token
            humm.setAccessToken(token);

            //
            humm.users.me(function(err, res){
                console.log('--------------------- users.me()----------');
                console.log(res);
            });*/
        });

    }
});
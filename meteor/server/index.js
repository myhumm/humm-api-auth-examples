
var humm =  Meteor.npmRequire('humm'),
    Future = Npm.require('fibers/future');

/*
//init humm
humm.init({
    client_id: '56570bacae8c5087411778a3',
    client_secret: 'CdNX3TcLc/OF3k2oIogwlBi/rCZOP0LSfLxrRjoX5EA='
});


var radios = Async.runSync(function(done) {
    humm.users.me(function(error, response) {
        console.log('------------- accessViaCodeGrant complete -------------');
        console.log(error);
        console.log(response);

        done(error, response);

    });
});

console.log(radios);
*/




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


        var future = new Future;

        humm.accessViaCodeGrant(parsedCode.data, Meteor.bindEnvironment(function(error, response) {
            console.log('------------- accessViaCodeGrant complete -------------');
            console.log(error);
            console.log(response);

            if (error) {
                return future.error(error);
            }
            future.return(response);
        }));

        return future.wait();
/*
        var result = Async.runSync(function(done) {
            humm.accessViaCodeGrant(parsedCode.data, function(error, response) {
                console.log('------------- accessViaCodeGrant complete -------------');
                console.log(error);
                console.log(response);

                done(error, response);

            });
        });

        console.log(result);

        return result;*/



    }
});
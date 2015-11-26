
var isLoggedIn = new ReactiveVar(false),
    me;


Template.completeAuth.onRendered(function () {

    console.log('-------------Rendered----------');
    console.log(window.location);
    humm.completeAuthorization(window.location);
});

Template.humm.helpers({
    isLoggedIn: function isLoggedIn(){
        return isLoggedIn.get();
    },

    me: function me() {
        return me;
    }
});

Template.humm.events({
    'click #login': function login(){
        console.log('------------------- Starting Auth via auth code follow ------------------- ');
        console.log(humm);


        // init humm  with client_id
        humm.init({ client_id: '56570bacae8c5087411778a3' });

        //show pop up to enable user to login to hum
        humm.authViaCodeGrant(function(error, response) {
            console.log('------------- authViaAuthorizationCode complete -------------');
            console.log(error);
            console.log(response);

            //once the user is logged in and we have a code we can call
            Meteor.call('getMe', response.code, function(err, res) {
                console.log(err);
                console.log(res);
            //    res.data_response;
            })
        });

    }
});


Template.humm.onCreated(function () {
    this.loggedViaCode = new ReactiveVar(false);
    this.meViaCode = {};

    this.loggedViaImplicit = new ReactiveVar(false);
    this.meViaImplicit = {};

});

Template.humm.helpers({
    loggedViaCode: function loggedViaCode(){
        return Template.instance().loggedViaCode.get();
    },

    meViaCode: function meViaCode() {
        return Template.instance().meViaCode;
    },

    loggedViaImplicit: function loggedViaImplicit(){
        return Template.instance().loggedViaImplicit.get();
    },

    meViaImplicit: function meViaImplicit() {
        return Template.instance().meViaImplicit;
    }
});

Template.humm.events({
    'click #login-via-auth-code': function loginViaCode(){
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
            })
        });

    },

    'click #login-via-implicit-grant': function loginViaImplicitGrant(event, template){
        console.log('------------------- Starting Auth via implicit grant follow ------------------- ');

        // init humm  with client_id
        humm.init({ client_id: '56570bacae8c5087411778a3' });

        //show pop up to enable user to login to hum
        humm.authViaImplicitGrant(function(error, response) {
            console.log('------------- authViaImplicitGrant complete -------------');
            console.log(error);
            console.log(response);

            //show pop up to enable user to login to hum
            humm.users.me(function(error, response) {
                console.log('------------- user.me() complete -------------');
                console.log(error);
                console.log(response);
                template.loggedViaImplicit.set(true);
                console.log(response.data_response);
                template.meViaImplicit = response.data_response;
            });
        });

    }
});

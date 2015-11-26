
var isLoggedIn = new ReactiveVar(false),
    me;

Template.yumm.helpers({
    isLoggedIn: function isLoggedIn(){
        return isLoggedIn.get();
    },

    me: function me() {

    }
});

Template.yumm.events({
    'click #login': function login(){
        console.log('------------------- Starting Auth via auth code follow ------------------- ');
    }
});

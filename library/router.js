Router.route('/', {
    action: function () {
        this.render('humm');
    },
    name: 'humm'
});

Router.route('/complete-auth', {
    action: function () {
        humm.completeAuthorization(window.location);
    }
});


/**

 App name: Meteor example

 Client ID: 56570bacae8c5087411778a3

 Client Secret: CdNX3TcLc/OF3k2oIogwlBi/rCZOP0LSfLxrRjoX5EA=

 Redirect URI: https://developer.spotify.com

 */
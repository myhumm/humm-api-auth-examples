Router.route('/', {
    action: function () {
        this.render('humm');
    },
    name: 'humm'
});

Router.route('/complete-auth', {
    action: function () {
        console.log('-----------Auth Redirect----------');
        console.log(window.location);
        this.render('completeAuth');
    }
});


/**

 App name: Meteor example

 Client ID: 56570bacae8c5087411778a3

 Client Secret: CdNX3TcLc/OF3k2oIogwlBi/rCZOP0LSfLxrRjoX5EA=

 Redirect URI: https://developer.spotify.com

 */
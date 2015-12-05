# Humm Accounts Authentication Examples

This project contains basic demos showing the different OAuth 2.0 flows for [authenticating against the Humm Web API](http://developers.myhumm.com/web/auth-guide) using Humm Javascript SDK

These examples cover:

* Authorization Code flow
* Client Credentials flow
* Implicit Grant flow

## Installation

These examples run on Node.js.[website](http://www.nodejs.org/download/) you can find instructions on how to install it. You can also follow [this gist](https://gist.github.com/isaacs/579814) for a quick and easy way to install Node.js and npm.

Once installed, clone the repository and install its dependencies running:

    $ npm install

## Running the examples
In order to run the different examples, open the folder with the name of the flow you want to try out, and run its `app.js` file. For instance, to run the Authorization Code example do:

    $ cd authorization_code
    $ node app.js

Then, open `http:/127.0.0.1:3000` in a browser.

### Using your own credentials
The examples contains a working client ID and secret key. Note, however, that they might be rate limited if they are used frequently. If you are planning to create an application, we recommend you register your app and get your own credentials instead of using the ones in this project.

Go to [My Applications on Humm Developer](http://accounts.livingindietv.com/apps) and create your application.

For the examples, we registered these Redirect URIs:

* http://127.0.0.1:3000/complete-auth (used for implicit & auth code flow)
* NOTE: You must include "http://" explicitly for this to work

Once you have created your app, replace the `client_id` and `client_secret` in the examples with the ones you get from My Applications.

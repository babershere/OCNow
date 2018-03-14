// config/auth.js

// expose our config directly to our application using module.exports
module.exports = {

    'facebookAuth': {
        'clientID': '778643939010144', // your App ID
        'clientSecret': 'e73096847d7a3c6d33fe4645c30a30cb', // your App Secret
        'callbackURL': 'http://localhost:8080/auth/facebook/callback',
        'profileURL': 'https://graph.facebook.com/v2.5/me?fields=first_name,last_name,email',
        'profileFields': ['id', 'email', 'name'] // For requesting permissions from Facebook API

    },

    'twitterAuth': {
        'consumerKey': 'tlYzYIucHnBor25WjoxXCddef',
        'consumerSecret': '7H1pl8F562HNfsaiDr26PM9FucSUTDo4ZZmRrLUevkiMzn80OR',
        'callbackURL': 'http://localhost:8080/auth/twitter/callback'
    },

    'googleAuth': {
        'clientID': '783468616918-dfm7s45onmun270om4008s03ve0obqdc.apps.googleusercontent.com',
        'clientSecret': 'C3alRgWTI8jg1wA16f71if4s',
        'callbackURL': 'http://127.0.0.1:3000/auth/google/callback'
    }

};

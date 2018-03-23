// load all the things we need
const passport = require('passport');
const LocalStrategy = require('passport-local');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
// load up the user model
const User = require('../app_api/models/users');
// load the auth variables
const configAuth = require('./auth'); // use this one for testing


// =========================================================================
// passport session setup ==================================================
// =========================================================================
// required for persistent login sessions
// passport needs ability to serialize and unserialize users out of session

// used to serialize the user for the session
passport.serializeUser(function (user, done) {
    done(null, user.id);
});

// used to deserialize the user
passport.deserializeUser(function (id, done) {
    User.findById(id, function (err, user) {
        done(err, user);
    });
});

// =========================================================================
// LOCAL LOGIN =============================================================
// =========================================================================
passport.use('local-login', new LocalStrategy({
        // by default, local strategy uses username and password, we will override with email
        usernameField: 'email',
        passwordField: 'password',
        passReqToCallback: true // allows us to pass in the req from our route (lets us check if a user is logged in or not)
    },
    function (req, email, password, done) {
        if (email)
            email = email.toString().toLowerCase(); // Use lower-case e-mails to avoid case-sensitive e-mail matching

        // asynchronous
        process.nextTick(function () {
            User.findOne({
                'local.email': email
            }, function (err, user) {
                // if there are any errors, return the error
                if (err)
                    return done(err);

                // if no user is found, return the message
                if (!user) {
                    console.log('user could not be found');
                    done(null, false, 'loginMessage', 'No user found.');

                }

                if (!user.validPassword(password)) {
                    console.log('user found, and passord matches');
                    return done(null, false, 'loginMessage', 'Oops! Wrong password.');
                }

                // all is well, return user
                else {
                    console.log('success');
                    return done(null, user);

                }
            });
        });

    }));



// =========================================================================
// LOCAL SIGNUP ============================================================
// =========================================================================
passport.use(new LocalStrategy({
        // by default, local strategy uses username and password, we will override with email
        usernameField: 'email',
        passwordField: 'password',
        passReqToCallback: true,
        proxy: true
    },
    function (req, email, password, done) {
        if (email)
            email = email.toString().toLowerCase(); // Use lower-case e-mails to avoid case-sensitive e-mail matching
        console.log(email);
        console.log(password);
        // asynchronous
        process.nextTick(function () {
            // if the user is not already logged in:
            if (!req.user) {
                User.findOne({
                    'local.email': email
                }, function (err, user) {
                    // if there are any errors, return the error

                    if (err) {
                        done(err, null);
                    }
                    // check to see if theres already a user with that email
                    if (user) {

                        done('That email is already taken.', null);
                    } else {
                        // create the user
                        var newUser = new User();

                        newUser.local.email = email;
                        newUser.local.password = newUser.generateHash(password);
                        newUser.local.firstName = req.body.firstName;
                        newUser.local.lastName = req.body.lastName;
                        newUser.local.city = req.body.city;
                        newUser.save(function (err) {
                            if (err) {
                                done(err, null);
                            } else {
                                done(null, newUser);
                            }
                        });
                    }

                });
                // if the user is logged in but has no local account...
            } else if (!req.user.local.email) {
                // ...presumably they're trying to connect a local account
                // BUT let's check if the email used to connect a local account is being used by another user
                User.findOne({
                    'local.email': email
                }, function (err, user) {
                    if (err) {
                        done(err, null);
                    }
                    if (user) {
                        done('That email is already taken.', null);
                        // Using 'loginMessage instead of signupMessage because it's used by /connect/local'
                    } else {
                        var user = req.user;
                        user.local.email = email;
                        user.local.password = user.generateHash(password);
                        user.save(function (err) {
                            if (err) {
                                done(err, null);
                            } else {
                                done(null, user);
                            }
                        });
                    }
                });
            } else {
                // user is logged in and already has a local account. Ignore signup. (You should log out before trying to create a new account, user!)
                done(null, req.user);
            }
        });
    }));

// =========================================================================
// GOOGLE ==================================================================
// =========================================================================
passport.use(new GoogleStrategy({

        clientID: configAuth.googleAuth.clientID,
        clientSecret: configAuth.googleAuth.clientSecret,
        callbackURL: '/auth/google/callback',
        proxy: true // allows us to pass in the req from our route (lets us check if a user is logged in or not)
    },
    function (req, token, refreshToken, profile, done) {
        // asynchronous
        process.nextTick(function () {
            // check if the user is already logged in
            if (!req.user) {
                User.findOne({
                    'google.id': profile.id
                }, function (err, user) {
                    if (err)
                        return done(err);
                    if (user) {
                        // if there is a user id already but no token (user was linked at one point and then removed)
                        if (!user.google.token) {
                            user.google.token = token;
                            user.google.name = profile.displayName;
                            user.google.email = (profile.emails[0].value || '').toLowerCase(); // pull the first email

                            user.save(function (err) {
                                if (err)
                                    return done(err);
                                return done(null, user);
                            });
                        }

                        return done(null, user);
                    } else {
                        var newUser = new User();

                        newUser.google.id = profile.id;
                        newUser.google.token = token;
                        newUser.google.name = profile.displayName;
                        newUser.google.email = (profile.emails[0].value || '').toLowerCase(); // pull the first email

                        newUser.save(function (err) {
                            if (err)
                                return done(err);

                            return done(null, newUser);
                        });
                    }
                });

            } else {
                // user already exists and is logged in, we have to link accounts
                var user = req.user; // pull the user out of the session

                user.google.id = profile.id;
                user.google.token = token;
                user.google.name = profile.displayName;
                user.google.email = (profile.emails[0].value || '').toLowerCase(); // pull the first email

                user.save(function (err) {
                    if (err)
                        return done(err);
                    return done(null, user);
                });
            }
        });
    }));
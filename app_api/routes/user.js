const jwt = require("jsonwebtoken");

module.exports = function (app, passport) {
    console.log("JWT Token", jwt)
    // process the login form
    app.post('/login',

        passport.authenticate('local-login', {
            failureFlash: true // allow flash messages
        }),
        function (req, res) {
            if (req.user) {

                const expTime = new Date();
                expTime.setDate(expTime.getDate() + 7);
                const signedJWT = jwt.sign({
                    userID: req.user._id,
                    email: req.user.local.email,
                    exp: parseInt(expTime.getTime() / 1000)
                }, 'assandtitties');

                delete req.user.local.password;
                res.status(200).send({
                    jwt: signedJWT,
                    user: req.user
                })
            } else {
                res.status(400).send({
                    message: 'Wrong username or password'
                })
            }
        }
    );


    // // SIGNUP =================================
    // // show the signup form
    // app.get('/signup', function (req, res) {
    //     res.status(200).send( { message: req.flash('signupMessage') });
    // });


    // process the signup form  
    app.post('/api/signup',
        passport.authenticate('local', {
            failureRedirect: '/signup'
        }),
        function (req, res) {
            res.send(req.body);
        })


    // google ---------------------------------

    // send to google to do the authentication
    app.get('/auth/google',
        function (req, res, next) {
            console.log('hello');
            next()
        },
        passport.authenticate('google', {
            scope: ['profile', 'email']
        })
    );

    // the callback after google has authenticated the user
    app.get('/auth/google/callback',
        passport.authenticate('google', {
            successRedirect: '/',
            failureRedirect: '/signup'
        })
    );

    // =============================================================================
    // AUTHORIZE (ALREADY LOGGED IN / CONNECTING OTHER SOCIAL ACCOUNT) =============
    // =============================================================================

    // locally --------------------------------
    app.get('/connect/local', function (req, res) {
        res.render('connect-local.ejs', {
            message: ('loginMessage')
        });
    });

    app.post('/connect/local',
        passport.authenticate('local-signup', {
            successRedirect: '/profile', // redirect to the secure profile section
            failureRedirect: '/connect/local', // redirect back to the signup page if there is an error
            failureFlash: true // allow flash messages
        })
    );


    // google ---------------------------------

    // send to google to do the authentication
    app.get('/connect/google',
        passport.authorize('google', {
            scope: ['profile', 'email']
        })
    );

    // the callback after google has authorized the user
    app.get('/connect/google/callback',
        passport.authorize('google', {
            successRedirect: '/profile',
            failureRedirect: '/'
        })
    );

    // =============================================================================
    // UNLINK ACCOUNTS =============================================================
    // =============================================================================
    // used to unlink accounts. for social accounts, just remove the token
    // for local account, remove email and password
    // user account will stay active in case they want to reconnect in the future

    // local -----------------------------------

    var logout = function (req, res, next) {
        // Get rid of the session token. Then call `logout`; it does no harm.
        req.logout();
        req.session.destroy(function (err) {
            if (err) {
                return next(err);
            }
            // The response should indicate that the user is no longer authenticated.
            return res.send({
                authenticated: req.isAuthenticated()
            });
        });
    };


    app.get('/unlink/local', logout, function (req, res) {
        var user = req.user;
        console.log(user)
        req.logout();
        req.session.destroy(function (err) {
            res.redirect('/');
        })

    });


    // google ---------------------------------
    app.get('/unlink/google', isLoggedIn, function (req, res) {
        var user = req.user;
        user.google.token = undefined;
        user.save(function (err) {
            res.redirect('/profile');
        });
    });

    // route middleware to ensure user is logged in
    function isLoggedIn(req, res, next) {
        if (req.isAuthenticated()) {
            return next();
        }
        res.redirect('/');
    }
}
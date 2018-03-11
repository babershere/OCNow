const User = require('../models/users');
const router = require('express').Router();

router.use((req,res) =>
res.sendFile(path.join(__dirname, './app_client/public/index.html'))
);

router.get('/getusers', (req, res) => {
    User.find({}, function (err, User));
    if(err) {
        res.send(An error has occured);
    }
        res.json(User);
    
});

router.post('/article', function(req, res) {
    user.save(function(err, User) {
        res.json(user);
    });
})
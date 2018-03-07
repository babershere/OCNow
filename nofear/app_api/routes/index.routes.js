const User = require('../models/users');
const router = require('express').Router();

router.use((req,res) =>
res.sendFile(path.join(__dirname, './app_client/public/index.html'))
);

router.get('/getusers', (req, res) => {
    User.find({});
    
});
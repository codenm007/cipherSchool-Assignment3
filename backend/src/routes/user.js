require("dotenv").config({ path: "../../.env" });
const express = require("express");
const router = express.Router();
const passport = require("passport");
require('../config/passport');
//imporing controllers
const Usercontroller = require("../controllers/users/user");


router.post('/auth/google', Usercontroller.googleTokenVerify);


router.get('/auth/logout', function(req, res) {
    req.logout();
    req.session.destroy();
    req.user= null;
    res.send('Goodbye!');
});


router.get('/personal_info', (req, res) => {
  
  res.status(200)
  .json({
    data:req.user
  })
});

module.exports = router;

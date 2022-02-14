require("dotenv").config({ path: "../../.env" });
const express = require("express");
const router = express.Router();
const passport = require("../config/passport");

//imporing controllers
const receipeController = require("../controllers/receipe/receipes")


//importing middleware
const decodeJWT = require("../middleware/jwt_decode");

//anonymous user routes



//protected routes

router.get('/',passport.authenticate("jwt", { session: false }),decodeJWT,receipeController.getAllReceipes);


router.get('/food', passport.authenticate("jwt", { session: false }),decodeJWT,receipeController.getMyReceipes);

router.post('/food', passport.authenticate("jwt", { session: false }),decodeJWT,receipeController.addReceipe);

router.put('/food', passport.authenticate("jwt", { session: false }),decodeJWT,receipeController.updateReceipe);

router.delete('/food', passport.authenticate("jwt", { session: false }),decodeJWT,receipeController.DeleteReceipe);



module.exports = router;

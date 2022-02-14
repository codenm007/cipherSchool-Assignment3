require("dotenv").config({ path: "../../.env" });
const express = require("express");
const router = express.Router();
const passport = require("../config/passport");

//imporing controllers
const receipeController = require("../controllers/receipe/receipes")


//importing middleware
const decodeJWT = require("../middleware/jwt_decode");

//anonymous user routes

router.get('/receipes',receipeController.getAllReceipes);


//protected routes

router.get('/receipe', passport.authenticate("jwt", { session: false }),decodeJWT,receipeController.getMyReceipes);

router.post('/receipe', passport.authenticate("jwt", { session: false }),decodeJWT,receipeController.addReceipe);

router.put('/receipe', passport.authenticate("jwt", { session: false }),decodeJWT,receipeController.updateReceipe);

router.delete('/receipe', passport.authenticate("jwt", { session: false }),decodeJWT,receipeController.DeleteReceipe);



module.exports = router;

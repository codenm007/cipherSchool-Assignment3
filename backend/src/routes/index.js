// All the routes are merged with the index routes

const express = require("express");
const router = express.Router();
const path = require("path");

//importing routes
const receipeRouter = require("./receipe");
const userRouter = require("./user");
  
router.use('/receipe',receipeRouter);

router.use('/user',userRouter);


module.exports = router;

const mongoose = require("mongoose");
const db_schema = require("../database/db");

const schema = new db_schema(
    {
        title: {
          type: String,
          required:true,

        },
        body: {
            type: String,
          },
        userId: {
            type: String,
            required:true,
          },
        pic: {
            type: String,
          },
      },
      {
        timestamps: true,
      }
);

const receipes =  mongoose.model("receipes", schema);

module.exports = receipes;
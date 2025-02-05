const mongoose = require("mongoose");

const connectToDb = () => {
  mongoose
    .connect(process.env.DB_CONNECT)
    .then(() => {
      console.log("Mongo Connected Successfully");
    })
    .catch((err) => console.log(err));
};

module.exports = connectToDb;

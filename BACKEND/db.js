const mongoose = require("mongoose");

const MONGO_URI = process.env.MONGO_URI;

console.log(MONGO_URI);

const connectDB = () => {
  // try {
  //   mongoose.connect(MONGO_URI).then(() => {
  //     console.log("Database Connected.");
  //   });
  // } catch (error) {
  //   console.log(error);
  //   process.exit(1);
  // }

  // mongoose.connect("mongodb://localhost:27017/employee");

  mongoose.connect(process.env.MONGO_URI);
};

module.exports = connectDB;

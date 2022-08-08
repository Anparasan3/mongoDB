const mongoose = require("mongoose");

mongoose.connect(
  "mongodb://localhost/mydb",
  () => {
    console.log("yes");

    console.log("conected to db....");
  },
  (err) => {
    console.log(err);
  }
);

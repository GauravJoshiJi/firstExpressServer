const express = require("express");
const port = 8000;
const app = express();

app.listen(port, function (err) {
  if (err) {
    console.log("Error in running server : ", err);
  }
  console.log("Yup!, Express is port : ", port);
});

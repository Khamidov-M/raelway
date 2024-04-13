const express = require("express");
const app = express();
app.set(express.json());
const mongoose = require("mongoose");

mongoose
  .connect("mongodb://localhost/realway", { useNewUrlParser: true })
  .then(() => {
    console.log("connected to mongodb...");
  })
  .catch(() => {
    console.log("connection filed whent connecting to mongodb...");
  });

const port = process.env.PORT || 4000;
app.listen(port, () => {
  console.log(`started with ${port} port...`);
});

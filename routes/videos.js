const { name } = require("commander");
const express = require("express");
const mongoose = require("mongoose");
const route = express.Router();
route.use(express.json());

const videoSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  info: {
    required: true,
    type: String,
    trim: true,
  },
  category: {
    type: String,
    trim: true,
    default: "tutorial",
  },
});

// create mothod

route.post('/', async (req, res) =>{
    if
})
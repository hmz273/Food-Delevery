const Mongoose = require("mongoose");
const Schema = Mongoose.Schema


const RestauSchema = new Mongoose.Schema({
  title: {
    type: String,
    unique: true,
    required: true,
  },
  city: {
    type: String,
    required: true,
  },
  desc: {
    type: String,
    required: true,
  },
  
});

const Restau = Mongoose.model("restau", RestauSchema);

module.exports = Restau;

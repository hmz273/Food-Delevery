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
  images: [{
    type: String,
    required: [true, 'Hotel must have at least 4 images']
  }],
  repa: { type: Schema.Types.ObjectId, ref: 'repa' },

  
});

const Restau = Mongoose.model("restau", RestauSchema);

module.exports = Restau;

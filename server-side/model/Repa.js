const Mongoose = require("mongoose");
const Schema = Mongoose.Schema

const RepaSchema = new Mongoose.Schema({
  title: {
    type: String,
    unique: true,
    required: true,
  },

  desc: {
    type: String,
    required: true,
  },

  price: {
    type: String,
    required: true,
  },

  images: [{
    type: String,
    required: [true, 'Hotel must have at least 4 images']
  }],

  restau: [{ 
    type: Schema.Types.ObjectId,
     ref: 'restau', 
     required: true 
  }],

  category: [{
     type: Schema.Types.ObjectId,
      ref: 'category', 
      required: true
  }],

  
});

// RepaSchema.virtual('repas',{
//   ref: 'restau',
//   localField: '_id',
//   foreignField: 'repa_id', 

// })

const Repa = Mongoose.model("repa", RepaSchema);

module.exports = Repa;

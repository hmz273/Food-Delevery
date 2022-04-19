const Mongoose = require("mongoose");
const Schema = Mongoose.Schema

const CategorySchema = new Mongoose.Schema({
  title: {
    type: String,
    unique: true,
    required: true,
  },
}); 

const Category = Mongoose.model("category", CategorySchema);

module.exports = Category;

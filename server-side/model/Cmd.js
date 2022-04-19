const Mongoose = require("mongoose");
const Schema = Mongoose.Schema

const CommandeSchema = new Mongoose.Schema({
  title: {
    type: String,
    unique: true,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    default: "pending",
    required: true,
  },
  total: {
    type: String,
    required: true,
  },
  
  repa: { type: Schema.Types.ObjectId, ref: 'repa' },

});

const Commande = Mongoose.model("commande", CommandeSchema);

module.exports = Commande;

const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  ide: {
    type: Number,
  },
  name: {
    type: String,
  },
  company: {
    type: String,
  },
  price: {
    type: Number,
  },
  colors:{
    type: Array,
  },
  image: {
    type: String,
  },
  description:{
    type: String,
  },
  category: {
    type: String,
  },
  ratting:{
    type:String,
  },
  oPrice:{
    type:String,
  },


});
const product = mongoose.model("product", productSchema);

module.exports = product;

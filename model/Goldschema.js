const mongoose = require('mongoose');


const Goldtrackschema = new mongoose.Schema({

  item: {
    type: String,
    required: true
  },
  originalprice: {
    type: Number,
    required: true,
  },
  gram:{
    type:Number,
  },
  bestprice: {
    type: Number,
    required: true,
    default: 4700
  },
  timerange: {
    type: Number,
    default: 10
  }

}, {
  timestap: true
});

module.exports=mongoose.model("Goldschema",Goldtrackschema);
// module.exports=mongoose.model("Product",ProductSchema);

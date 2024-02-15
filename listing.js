const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const listingSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  description: String,
  image: {
    type: String,
    default:
      "https://images.pexels.com/photos/1133957/pexels-photo-1133957.jpeg",
    set: (v) =>
      v === ""
        ? "https://images.pexels.com/photos/1133957/pexels-photo-1133957.jpeg"
        : v,
  },
  price: Number,
  location: String,
  country: String,
});

const Listing = mongoose.model("Listing", listingSchema);
module.exports = Listing;














// const mongoose = require("mongoose");
// const listingSchema = new mongoose.Schema({
//     title:{
//         type:String,
//         require:true,
//     },
//     description:{
//         type:String,},
//     Image:{
//         type:String,
//         default:"https://unsplash.com/photos/the-sun-is-shining-over-the-water-and-rocks-CIuhewxFdxU",
//         set:(v)=> v===""? "https://unsplash.com/photos/the-sun-is-shining-over-the-water-and-rocks-CIuhewxFdxU":v,
//     },
//     price:{
//         type:Number,},
//     location:{
//         type:String,},
//     country:{
//         type:String,},
// });

// const Listing =  mongoose.model("Listing",listingSchema);

// module.exports = Listing;


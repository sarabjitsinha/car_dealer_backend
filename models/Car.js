// import mongoose from 'mongoose';

// const carSchema = new mongoose.Schema({
//   name: String,
//   year: Number,
//   slug: { type: String, unique: true },
//   image: String,
//   description: String,
//   price: Number
// }, { timestamps: true });

// export default mongoose.model('Car', carSchema);

import mongoose from "mongoose";

const carSchema = new mongoose.Schema({
  name: { type: String, required: true },
  slug: { type: String, required: true, unique: true },
  year: { type: Number, required: true },
  price: { type: Number, required: true },
  description: { type: String, required: true },
  image: { type: String, required: false }, // URL to uploaded image
}, { timestamps: true });

export default   mongoose.model("Car", carSchema);
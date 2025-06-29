import mongoose from 'mongoose';

const carSchema = new mongoose.Schema({
  name: String,
  year: Number,
  slug: { type: String, unique: true },
  image: String,
  description: String,
  price: Number
}, { timestamps: true });

export default mongoose.model('Car', carSchema);

import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
  title: String,
  price: Number,
  discountPercentage: Number,
  rating: Number,
  stock: String,
  brand: String,
  category: String,
  thumbnail: String,
  images: Array,
});
export default mongoose.model("Product", productSchema);

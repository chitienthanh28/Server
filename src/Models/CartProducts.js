import mongoose from "mongoose";

const cartProductsSchema = new mongoose.Schema({
  title: String,
  description: String,
  price: Number,
  discountPercentage: Number,
  rating: Number,
  stock: String,
  brand: String,
  category: String,
  thumbnail: String,
  images: Array,
  colors: Array,
  sizes: Array,
  selectColor: String,
  selectSize: String,
  isActiveColor: String,
  isActiveSize: String,
  isValidData: Boolean,
  quantity: Number,
});
export default mongoose.model("cartproducts", cartProductsSchema);

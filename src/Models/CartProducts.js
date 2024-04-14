import mongoose from "mongoose";

const cartProductsSchema = new mongoose.Schema({
  thumbnail: String,
  images: String,
  title: String,
  price: Number,
  brand: String,
  colors: String,
  sizes: String,
  selectColor: String,
  selectSize: String,
  isActiveColor: String,
  isActiveSize: String,
  isValidData: Boolean,
  quantity: Number,
});
export default mongoose.model("cartproducts", cartProductsSchema);

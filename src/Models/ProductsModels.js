import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
  {
    title: String,
    price: Number,
    discountPercentage: Number,
    rating: Number,
    brand: String,
    category: String,
    thumbnail: String,
    images: Array,
    colors: Array,
    sizes: Array,
  },
  { versionKey: false }
);
export default mongoose.model("Product", productSchema);

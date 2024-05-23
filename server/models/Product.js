const mongoose = require("mongoose");

const reviewSchema = mongoose.Schema(
  {
    user: { type: mongoose.Schema.Types.ObjectId, required: true, ref: "User" },
    name: { type: String, required: true },
    rating: { type: Number, required: true },
    comment: { type: String, required: true },
  },
  { timestamps: true }
);

const productSchema = mongoose.Schema(
  {
    name: { type: String, required: true },
    slug: { type: String, required: true, unique: true},
    price: { type: Number, required: true, default: 0 },
    user: { type: mongoose.Schema.Types.ObjectId, required: true, ref: "User" },
    image: { type: String},
    category: { type: String},
    countInStock: { type: Number, required: true, default: 0 },
    description: { type: String},
    rating: { type: Number,  default: 0 },
    reviews: [reviewSchema],
    numReviews: { type: Number,  default: 0 },
  },
  { timestamps: true, toJSON: { virtuals: true } }
);

const Product = mongoose.model("Product", productSchema);
module.exports = Product;
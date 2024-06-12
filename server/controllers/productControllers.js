const asyncHandler = require("express-async-handler");
const Product = require("../models/Product");
const { uploadPicture } = require("../middleware/uploadPictureMiddleware");
const { fileRemover } = require("../utils/fileRemover");

const getAllProducts = asyncHandler(async (req, res) => {
  const pageSize = 10;
  const page = Number(req.query.pageNumber) || 1;

  const keyword = req.query.keyword
    ? {
        name: {
          $regex: req.query.keyword,
          $options: "i",
        },
      }
    : {};

  const count = await Product.countDocuments({ ...keyword });
  const products = await Product.find({ ...keyword })
    .limit(pageSize)
    .skip(pageSize * (page - 1))
    .sort({ updatedAt: "desc" });
  res.json({ products, page, pages: Math.ceil(count / pageSize) });
});

const getProduct = asyncHandler(async (req, res) => {
  const product = await Product.findOne({ slug: req.params.slug });
  if (product) {
    res.json(product);
  } else {
    res.status(404);
    throw new Error("Product not found");
  }
});

const deleteProduct = asyncHandler(async (req, res) => {
  const product = await Product.findOne({ slug: req.params.slug });
  if (product) {
    await product.remove();
    res.json({ message: "Product removed" });
  } else {
    res.status(404);
    throw new Error("Product not found");
  }
});

const createProduct = asyncHandler(async (req, res) => {
  const generateSlug = (title) => {
    const timestamp = Date.now();
    let slug = title.toLowerCase().replace(/\s+/g, "-");
    slug = slug.replace(/[^\w-]+/g, "");
    slug = `${slug}-${timestamp}`;
    return slug;
  };
  const productName = "Sample Product";
  const product = new Product({
    name: productName,
    slug: generateSlug(productName),
    price: 0,
    user: req.user._id,
    image: "/images/sample.jpg",
    // brand: "Sample brand",
    category: "Sample category",
    countInStock: 0,
    description: "Sample description",
    rating: 0,
    reviews: [],
    numReviews: 0,
  });

  const createdProduct = await product.save();
  res.status(201).json(createdProduct);
});


const updateProduct = async (req, res, next) => {
  try {
    const product = await Product.findOne({ slug: req.params.slug });

    if (!product) {
      const error = new Error("Product was not found");
      next(error);
      return;
    }

    const upload = uploadPicture.single("productPicture");

    const handleUpdateProductData = async (data) => {
      const {
        name,
        slug,
        price,
        user,
        image,
        category,
        countInStock,
        description,
        rating,
        reviews,
        numReviews,
      } = JSON.parse(data);

      product.name = name || product.name;
      product.slug = slug || product.slug;
      product.price = price || product.price;
      product.user = user || product.user;
      product.image = image || product.image;
      product.category = category || product.category;
      product.countInStock = countInStock || product.countInStock;
      product.description = description || product.description;
      product.rating = rating || product.rating;
      product.reviews = reviews || product.reviews;
      product.numReviews = numReviews || product.numReviews;

      const updatedProduct = await product.save();
      return res.json(updatedProduct);
    };

    upload(req, res, async function (err) {
      if (err) {
        const error = new Error(
          "An unknown error occurred when uploading: " + err.message
        );
        next(error);
      } else {
        // everything went well
        if (req.file) {
          let filename = product.image;
          if (filename) {
            fileRemover(filename);
          }
          product.image = req.file.filename;
          handleUpdateProductData(req.body.document);
        } else {
          // let filename = product.image;
          // product.image = "";
          // if (filename) {
          //   fileRemover(filename);
          // }
          handleUpdateProductData(req.body.document);
        }
      }
    });
  } catch (error) {
    next(error);
  }
};


const createProductReview = asyncHandler(async (req, res) => {
  const { rating, comment } = req.body;

  const product = await Product.findOne({ slug: req.params.slug });

  if (product) {
    const alreadyReviewed = product.reviews.find(
      (review) => review.user.toString() === req.user._id.toString()
    );

    if (alreadyReviewed) {
      res.status(400);
      throw new Error("Product already reviewed");
    }

    const review = {
      user: req.user._id,
      name: req.user.name,
      rating: Number(rating),
      comment,
    };

    product.reviews.push(review);

    product.numReviews = product.reviews.length;

    product.rating =
      product.reviews.reduce((acc, item) => item.rating + acc, 0) /
      product.reviews.length;

    await product.save();
    res.status(201).json({ message: "Review added" });
  } else {
    res.status(404);
    throw new Error("Product not found");
  }
});

module.exports = {
  getAllProducts,
  getProduct,
  deleteProduct,
  createProduct,
  updateProduct,
  createProductReview,
};

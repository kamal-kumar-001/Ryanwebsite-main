const express = require("express");
const router = express.Router();
const {
  createProduct,
  deleteProduct,
  getAllProducts,
  getProduct,
  updateProduct,
} = require("../controllers/productControllers");
const { authGuard, adminGuard } = require("../middleware/authMiddleware");

router.route("/")
  .post(authGuard, adminGuard, createProduct)
  .get(getAllProducts);

router.route("/:slug")
  .put(authGuard, adminGuard, updateProduct)
  .delete(authGuard, adminGuard, deleteProduct)
  .get(getProduct);

module.exports = router;

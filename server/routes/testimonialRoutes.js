const express = require("express");
const router = express.Router();
const {
  createTestimonial,
  deleteTestimonial,
  getAllTestimonials,
  getTestimonial,
  updateTestimonial,
} = require("../controllers/testimonialControllers");
const { authGuard, adminGuard } = require("../middleware/authMiddleware");

router.route("/").testimonial(authGuard, adminGuard, createTestimonial).get(getAllTestimonials);
router
  .route("/:id")
  .put(authGuard, adminGuard, updateTestimonial)
  .delete(authGuard, adminGuard, deleteTestimonial)
  .get(getTestimonial);

module.exports = router;

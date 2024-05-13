const express = require("express");
const router = express.Router();
const {
  addOrderItems,
  getOrderById,
  getMyOrders,
  getOrders,
  updateOrderToDelivered,
} = require("../controllers/orderControllers");
const { authGuard, adminGuard } = require("../middleware/authMiddleware");

router.route("/")
  .post(authGuard, addOrderItems)
  .get(authGuard, adminGuard, getOrders);

router.route("/myorders")
  .get(authGuard, getMyOrders);

router.route("/:id")
  .get(authGuard, getOrderById);

router.route("/:id/deliver")
  .put(authGuard, adminGuard, updateOrderToDelivered);

module.exports = router;

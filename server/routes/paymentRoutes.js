const express = require("express");
const router = express.Router();
const {
  createInvoice,
  statusCallback,
} = require("../controllers/paymentControllers");
const { authGuard } = require("../middleware/authMiddleware");

router.post("/create-invoice", authGuard, createInvoice);
router.post("/status-callback", statusCallback);

module.exports = router;

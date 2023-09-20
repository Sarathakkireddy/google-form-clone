const express = require("express");
const { protect } = require("../middleware/authMiddleware");
const {
  getForms,
  updateform,
  viewform,
} = require("../controllers/formcontroller");

const router = express.Router();

router.get("/formdets", protect, getForms);
router.patch("/form", protect, updateform);
router.get("/viewform", viewform); 

module.exports = router;
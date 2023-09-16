const express = require("express");
const { protect } = require("../middleware/authMiddleware");
const {getForms, updateForms,createform}=require("../controllers/formcontroller");

const router = express.Router();

router.get("/formdets",protect,getForms);
router.put("/edit",protect,updateForms);
router.put("/form",protect,createform);

module.exports = router;
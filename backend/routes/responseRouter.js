const express = require("express");
const {updateresp, getresp} = require("../controllers/responsecontroller");
const { protect } = require("../middleware/authMiddleware");


const router=express.Router();

router.post("/uploadresp",updateresp);
router.get("/allrespon/:formid",protect,getresp); 

module.exports=router;
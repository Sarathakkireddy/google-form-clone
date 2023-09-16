const accountModel = require("../models/account");

const getMyDetails = async (req, res) => {
  try {
    res.json({
      details: req.user,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

module.exports=getMyDetails;
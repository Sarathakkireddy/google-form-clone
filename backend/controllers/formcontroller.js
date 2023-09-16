const formModel = require("../models/forms");

const getForms = async (req, res) => {
  try {
    const data = await formModel.find({ user: req.user._id }); 
    res.status(200).json({ data });
  } catch (error) {
    res.status(400).json({ message: error });
  }
};


const updateForms = async (req, res) => {
  try {
    const data = await formModel.findByIdAndUpdate(req.body.user, req.body.forms);
    res.status(200).json({data});
  } catch (error) {
    res.status(400).json({ message: error });
  }
};

const createform=async(req,res)=>{
  try{
    const data=await formModel.find({user: req.body.user}).updateOne(...req.body.forms);

  }catch(error){
    res.status(400).json({ message: error });
  }
}

module.exports = { getForms, updateForms, createform };

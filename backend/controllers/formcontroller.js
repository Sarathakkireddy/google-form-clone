const formModel = require("../models/forms");

const getForms = async (req, res) => {
  try {
    const data = await formModel.find({ user: req.user._id });
    res.status(200).json({ data });
  } catch (error) {
    res.status(400).json({ message: error });
  }
};



const updateform = async (req, res) => {
  try {
    const data = await formModel.findByIdAndUpdate(req.body.id,{forms:req.body.forms});
    res.status(200).json({ data })
    
  } catch (e) { 
    res.status(400).json({message: e.message });
  }
};

const viewform=async (req,res)=>{
  try{
    const data=await formModel.find(req.body.userid);
    res.status(200).json({data});
  }catch(e){
    res.status(400).json({message: e.message });
  }
}

module.exports = { getForms, updateform, viewform };

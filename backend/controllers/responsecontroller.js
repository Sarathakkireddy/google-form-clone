const responseModel=require("../models/responses");
const { param } = require("../routes/responseRouter");

const updateresp=async (req,res)=>{
    try{
        const data=await responseModel.create(req.body);
        res.status(200).json({data});

    }catch(e){
        res.status(400).json({ message: e });
    }
}

const getresp= async (req, res)=>{
    try{
        const data=await responseModel.find({formid:req.params.formid});
        res.status(200).json({data});
    }catch(e){
        res.status(400).json(e);
    }
}
module.exports={updateresp,getresp};
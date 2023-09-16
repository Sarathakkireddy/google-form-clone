const accountModel = require("../models/account");
const formModel=require("../models/forms");
const { hashed } = require("../utils/passHash");

const register=async(req,res)=>{
    try{
        const accountWithEmail = await accountModel.find({ email: req.body.email });
        const accountWithContact = await accountModel.find({
          contact: req.body.contact,
        });
        if (accountWithEmail.length || accountWithContact.length) {
          res.status(400).json({
            message: "user already exists",
          });
        } else {
          const hashedPass = hashed(req.body.password);
          const new_account = await accountModel.create({
            name:req.body.name,
            email:req.body.email,
            contact:req.body.contact,
            password: hashedPass,
          });
          const addform=await formModel.create({
            user:new_account._id,
            forms:[{title:"Undefiened title",description:"description",questions:[{question:"Question",qtype:"radio",options:["option"]}]}],
          });
          res.status(201).json(new_account);
        }
    }
    catch(error){
        res.status(400).json({
            message:error,
        })
    }
}

module.exports=register;
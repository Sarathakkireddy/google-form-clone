const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const questionSubSchema=new Schema({
  question: { type: String },
  qtype: { type: String },
  options: { type: Array },
})

const subFormSchema=new Schema({
      title: { type: String },
      description: { type: String },
      questions: [questionSubSchema],

})

const formSchema = new Schema({
  user: { type: Schema.Types.ObjectId, ref: "accounts" },
  forms: [subFormSchema],
});

const formModel = mongoose.model("forms", formSchema);

module.exports = formModel;

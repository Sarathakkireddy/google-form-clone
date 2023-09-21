const mongoose = require("mongoose");

const Schema = mongoose.Schema;


const formSchema = new Schema({
  user: { type: Schema.Types.ObjectId, ref: "accounts" },
  forms: [
    {
      title: { type: String },
      description: { type: String },
      questions: [
        {
          question: { type: String },
          type: { type: String },
          required:{type:Boolean},
          options: { type: Array },
        }
      ]
    }
  ]
});

const formModel = mongoose.model("forms", formSchema);

module.exports = formModel;

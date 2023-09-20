const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const responsesSchema = new Schema({
  userid: { type: Schema.Types.ObjectId, ref: "accounts" },
  formid: { type: Schema.Types.ObjectId, ref: "forms" },
  responses: [
    {
      quesid: { type: Schema.Types.ObjectId, ref: "forms" },
      answer: { type: Array },
    },
  ],
});

const responseModel = mongoose.model("responses", responsesSchema);

module.exports = responseModel;

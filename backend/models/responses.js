const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const responseSubSchema=new Schema({
    questionid:{type:Schema.Types.ObjectId, ref: "forms"},
    response:{type:Array},

})

const responsesSchema=new Schema({
    userid:{type:Schema.Types.ObjectId, ref: "accounts"},
    formid:{type:Schema.Types.ObjectId, ref: "forms"},
    responses:[responseSubSchema],
});

const responseModel = mongoose.model("responses", responsesSchema);

module.exports = responseModel;
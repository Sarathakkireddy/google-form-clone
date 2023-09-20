const express = require("express");
const cors = require("cors");
const accountRouter = require("./routes/accountRouter");
const formRouter = require("./routes/formRouter");
const responseRouter=require("./routes/responseRouter");
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

app.use("/google-form/v1/account", accountRouter);
app.use("/google-form/v1/frm", formRouter);
app.use("/google-form/v1/resp",responseRouter);

module.exports = app;

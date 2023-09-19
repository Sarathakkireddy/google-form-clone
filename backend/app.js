const express = require("express");
const cors = require("cors");
const accountRouter = require("./routes/accountRouter");
const formRouter = require("./routes/formRouter");
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

app.use("/google-form/v1/account", accountRouter);
app.use("/google-form/v1/frm", formRouter);

module.exports = app;

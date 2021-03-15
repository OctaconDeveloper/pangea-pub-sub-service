const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
require("dotenv").config();
const cors = require("cors");
const routes = require("./src/routes");
const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

mongoose.Promise = global.Promise;
mongoose
  .connect(process.env.DB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
  }) 
  .then((result) => {
    app.listen(process.env.PORT, () => {
      console.log(
        `${process.env.APP_NAME} running @ port: ${process.env.PORT}`
      );
    }); 
  })
  .catch((error) => {
    console.log(
        `Error starting up server ${error.message}`
        );
  });

app.get("/",  (req, res) => {
    res.status(200).json({ code: 200, message: `Welcome to ${process.env.APP_NAME}` });
  });


app.use(routes)

module.exports = app
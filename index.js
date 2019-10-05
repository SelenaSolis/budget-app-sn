const express = require('express')
const app = express()
const path = require("path")
let userRoute = require("./routes/userRoute")
const bodyParser = require("body-parser");
let mongoose = require("mongoose");
require("dotenv").config();

app.use(express.static(path.join(__dirname, 'client/build')));
app.use(bodyParser.json());
app.use('/users', userRoute);

if(process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

mongoose.connect(process.env.MONGODB_URI, {useNewUrlParser: true});


const thePort = process.env.PORT || 3001
app.listen(thePort, (err) => {
 if (err) {
   return console.log("Error", err);
 }
 console.log("Web server is now listening for messages on port",thePort);
});

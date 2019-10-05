const express = require('express')
const app = express()
const path = require("path")
let userRoute = require("./routes/userRoute")
const bodyParser = require("body-parser");
let mongoose = require("mongoose");
require("dotenv").config();

var MONGODB_URI = "mongodb+srv://selenasolis:Ss-419057@selena-practice-s1rzj.mongodb.net/budgetApp" || "mongodb://localhost/budgetApp";
const options = {
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: false,
  family: 4 // Use IPv4, skip trying IPv6
};

mongoose.connect(MONGODB_URI,options);

app.use(express.static(path.join(__dirname, 'client/build')));
app.use(bodyParser.json());
app.use('/users', userRoute);

if(process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}
app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
});




const thePort = process.env.PORT || 3001
app.listen(thePort, (err) => {
 if (err) {
   return console.log("Error", err);
 }
 console.log("Web server is now listening for messages on port",thePort);
});

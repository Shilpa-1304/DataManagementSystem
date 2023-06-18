const express=require("express");
const mongoose=require('mongoose');
// const fileUpload=require("express-fileupload");
const app=express();
const bodyParser = require("body-parser");
const cors = require("cors");
const PORT=process.env.port || 8080;
const routes=require('./Server/routes/data.route');
MONGODB_URL='mongodb+srv://shilpa:shilpa2811@datamanagementsystem.dgjtctc.mongodb.net/dataManagementSystem?retryWrites=true&w=majority';


app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(routes);

mongoose
  .connect(MONGODB_URL)
  .then(() => {
    console.log(`Connected to the MONGODB!`);
  })
  .catch(err => {
    console.log("Cannot connect to the database!", err);
    process.exit();
  });



app.listen(PORT, () => {
	console.log(`Listening on Port: ${PORT}`);
})
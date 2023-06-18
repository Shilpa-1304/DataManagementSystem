const express=require("express");
const mongoose=require('mongoose');
const app=express();
const cors = require("cors");
const PORT=process.env.port || 8080;

const bodyParser = require("body-parser");

const routes=require('./Server/routes/data.route');


MONGODB_URL='mongodb+srv://shilpa:shilpa2811@datamanagementsystem.dgjtctc.mongodb.net/dataManagementSystem?retryWrites=true&w=majority';

//MIDDLEWARE
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(routes);



//CREATE MONGO CONNECTION
mongoose
  .connect(MONGODB_URL,{
    useUnifiedTopology: true,
    useNewUrlParser: true
  })
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
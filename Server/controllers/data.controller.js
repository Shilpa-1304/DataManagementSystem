const dataModel=require('../models/data.model');
const upload = require("../middleware/upload.middleware");
// const dbConfig = require("../config/db");

const MongoClient = require("mongodb").MongoClient;
const GridFSBucket = require("mongodb").GridFSBucket;

MONGODB_URL='mongodb+srv://shilpa:shilpa2811@datamanagementsystem.dgjtctc.mongodb.net/dataManagementSystem?retryWrites=true&w=majority';

const baseUrl = "http://localhost:8080/files/";

const mongoClient = new MongoClient(MONGODB_URL);
module.exports.getDataController=async(req,res)=>{
    const text=await dataModel.find();
    res.send(text);
}
module.exports.saveDataController=async(req,res)=>{
    const {text}=req.body
    const textAdded=await dataModel.create({text});
    console.log(`${textAdded} successfully !`)
    res.send(textAdded);
}
module.exports.updateDataController=async(req,res)=>{
    const {_id,text}=req.body;
    const updatedText=await dataModel.findByIdAndUpdate(_id,{text});
    console.log(`Text afer updation/deletion: ${updatedText}`);
    res.send(updatedText);
}

module.exports.deleteDatacontroller=async(req,res)=>{
    const {_id}=req.body;
    const deletedText=await dataModel.findByIdAndDelete(_id);
    console.log(`Text afer updation/deletion: ${deletedText}`);
    res.send(deletedText);
}
module.exports.uploadFilesController = async (req, res) => {
    try {
        console.log('Inside upload controller');
      await upload(req, res);
      console.log(req.file);
  
      if (req.file == undefined) {
        return res.send({
          message: "You must select a file.",
        });
      }
  
      return res.send({
        message: "File has been uploaded.",
      });
    } catch (error) {
      console.log(error);
  
      return res.send({
        message: "Error when trying upload image: ${error}",
      });
    }
  };
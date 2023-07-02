const {documentschemas,folderSchemas}=require('../models/data.model');
const upload = require("../middleware/upload.middleware");
const MongoClient = require("mongodb").MongoClient;
const GridFSBucket = require("mongodb").GridFSBucket;

MONGODB_URL='mongodb+srv://shilpa:shilpa2811@datamanagementsystem.dgjtctc.mongodb.net/dataManagementSystem?retryWrites=true&w=majority';

const baseUrl = "http://localhost:8080/files/";

const mongoClient = new MongoClient(MONGODB_URL);

// module.exports.getDataController=async(req,res)=>{
//     const text=await folderSchema.find();
//     res.send(text);
// }
// module.exports.saveDataController=async(req,res)=>{
//     const {text}=req.body
//     const textAdded=await dataModel.create({text});
//     console.log(`${textAdded} successfully !`)
//     res.send(textAdded);
// }
// module.exports.updateDataController=async(req,res)=>{
//     const {_id,text}=req.body;
//     const updatedText=await dataModel.findByIdAndUpdate(_id,{text});
//     console.log(`Text afer updation/deletion: ${updatedText}`);
//     res.send(updatedText);
// }
 
// module.exports.deleteDatacontroller=async(req,res)=>{
//     const {_id}=req.body;
//     const deletedText=await dataModel.findByIdAndDelete(_id);
//     console.log(`Text afer updation/deletion: ${deletedText}`);
//     res.send(deletedText);
// }

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

module.exports.createFolderController=async(req,res)=>{
  const {folderName}=req.body
  console.log('Folder name in controller: ',folderName);
  const folderCreated=await folderSchemas.create({folderName});
  console.log(`${folderCreated} created successfully !`)
  res.send(folderCreated);
} 

module.exports.getAllFolderController=async(req,res)=>{
  const text=await documentschemas.find();
    res.send(text);
}
module.exports.getFolderContentController =async(req,res)=>{
  // let query = {_id: new ObjectId(req.params.id)};
  const folderId=req.params['id'];
  console.log('Requested ID : ',req.params['id']);
  const parentFolder=await documentschemas.findById(folderId);
  const subFolders=await folderSchemas.find();
  console.log('Parent folder: ',parentFolder);
  console.log('Sub-Folders : ',subFolders);
  res.send(parentFolder);
}

module.exports.createSubFolderController=async(req,res)=>{
  console.log('first created.')
  // const {folderName}=req.body
  // console.log('Folder name in controller: ',folderName);
  // const subFolderCreated=await folderSchemas.create({folderName});
  // console.log(`${subFolderCreated} created successfully !`)
  // res.send(subFolderCreated);
}
module.exports.deleteFolderController =async(req,res)=>{
  
}
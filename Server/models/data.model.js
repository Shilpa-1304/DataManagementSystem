const mongoose=require('mongoose');
const documentSchema=new mongoose.Schema({
    folderName:{
        type:String,
        require:true
    }
});

const folderSchema=new mongoose.Schema({
    parentId:{
        type:String,
        required:true
    },
    folderName:{
        type:String,
        require:true
    }
})

const documentschemas=mongoose.model('documentschemas',documentSchema);
const folderSchemas=mongoose.model('folderSchema',folderSchema);
module.exports= {documentschemas,folderSchemas}

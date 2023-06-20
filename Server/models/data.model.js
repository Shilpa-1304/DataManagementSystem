const mongoose=require('mongoose');
const DataSchema=new mongoose.Schema({
    text:{
        type:String,
        require:true
    }
});
const documentSchema=new mongoose.Schema({
    // parentIndex:{
    //     type:Number,
    //     require:true
    // },
    // folderIndex:{
    //     type:Number,
    //     require:true
    // },
    folderName:{
        type:String,
        require:true
    }
});
module.exports=mongoose.model('documentSchema',documentSchema);

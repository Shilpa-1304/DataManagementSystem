const dataModel=require('../models/data.model');

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
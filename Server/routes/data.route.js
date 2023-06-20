const {Router}=require('express');
const {getDataController, saveDataController,deleteDatacontroller,updateDataController,uploadFilesController,createFolderController,getParentFolderControler}=require('../controllers/data.controller');
const router=Router();

router.get('/',getDataController)
router.post('/saveData',saveDataController)
router.post('/updateData',updateDataController)
router.post('/deleteData',deleteDatacontroller)
router.post("/upload", uploadFilesController);
router.post("/createFolder",createFolderController);
router.get("/getParentFolder",getParentFolderControler)
module.exports=router;
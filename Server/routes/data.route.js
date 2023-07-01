const {Router}=require('express');
const {uploadFilesController,createFolderController,getParentFolderControler,getAllFolderController,getFolderContentController,deleteFolderController}=require('../controllers/data.controller');
const router=Router();
console.log('Reached router')
// router.get('/',getDataController)
// router.post('/saveData',saveDataController)
// router.post('/updateData',updateDataController)

// router.post('/deleteData',deleteDatacontroller)
router.get("/",getAllFolderController);
router.get("/:id",getFolderContentController);
router.post("/createFolder",createFolderController);
router.delete("/:id",deleteFolderController);
router.post("/upload", uploadFilesController);
module.exports=router;
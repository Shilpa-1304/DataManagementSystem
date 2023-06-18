const {Router}=require('express');
const {getDataController, saveDataController,deleteDatacontroller,updateDataController}=require('../controllers/data.controller');
const router=Router();

router.get('/',getDataController)
router.post('/saveData',saveDataController)
router.post('/updateData',updateDataController)
router.post('/deleteData',deleteDatacontroller)
module.exports=router;
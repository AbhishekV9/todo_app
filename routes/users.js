const express=require('express');
const router=express.Router();

const userController=require('../controllers/addOrRemove');

router.post('/add',userController.add);
router.post('/remove',userController.remove);

module.exports=router;
const express=require('express');
const router=express.Router();
console.log('router loaded');


const homeController=require('../controllers/home_controller');
router.get('/',homeController.home);

router.use('/users',require('./users'));


module.exports=router;
// idk kyu error ara hai, iss 's showing the error but there isn't any mistake in it. 
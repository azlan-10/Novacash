const express = require('express');
const Userrouter = require('./userrouter')
const Accountrouter = require('./accountrouter')
const router = express.Router();

router.use('/user', Userrouter);
router.use('/account' , Accountrouter)


module.exports=router
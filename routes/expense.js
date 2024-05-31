const express = require("express");
const router = express.Router();
const { createExpense }=require("../controllers/expense")
router.route('/').post(createExpense)
module.exports=router
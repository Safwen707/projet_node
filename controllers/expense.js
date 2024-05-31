const Expense=require("../models/expense");
exports.createExpense=async(req,res,next)=>{
    console.log(req.body);
    try{
        const expense = await  Expense.create(req.body);
        res.status(201).json({success: true ,data:expense})
    }catch(error){
        console.log("aaa");
        res.status(400).json({success:false ,error:error.message})

    }

}
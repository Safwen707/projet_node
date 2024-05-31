const mongoose = require("mongoose");
const expenseSchema= new mongoose.Schema({
    totalBudget: {
        type:Number,
        
    },
    spentFor: {
        type:String,
        
        maxLength:200,
        minLength:1,
        default:'shopping'
    },
    amountSpent: {
        type:Number,
        max:200,
        min:100,
    },
    day: String,
    
    date:Number,

    month:Number,
    
    year:Number,
    paidType: {
        type:String,
        enum:['cash','card','money transfer'],
        default:'cash'
    },
    
},

)
module.exports=mongoose.model('expense',expenseSchema)
const mongoose=require('mongoose');
const todoListSchema=new mongoose.Schema({
    description:{
        type:String,
        required:true
    },
    category:{
        type:String,
        required:true
    },
    date:{
        type:Date,
        required:true
    }
});

const TodoList=mongoose.model('TodoList',todoListSchema);

module.exports=TodoList; // jis controller me use krre ho vaha yhi use krna h

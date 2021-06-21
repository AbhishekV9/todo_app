
const TodoList= require('../models/TodoList'); //yha dekho small 't' likha hai :-so you have to require whatever you are exporting from model
module.exports.home=function(req,res){
    
    TodoList.find({},function(err,list){
        if(err){
            console.log("Error in Fetchinf DATTA from Database ");
            return;
        }
        res.render('home',{
            title:"Todo App",
            todo_list:list
        });
    });
    
};
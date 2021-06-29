const TodoList=require("../models/TodoList")
module.exports.add=function(req,res){
   TodoList.create({
       description:req.body.description,
       category:req.body.category,
       date:req.body.date
   },function(err,newList){
        if(err){
            console.log("error in creating new List");
            return;
        }
        console.log("***",newList);
        res.redirect('/');
   });
   
};

module.exports.remove=function(req,res){
    console.log(req.body)
    Object.keys(req.body).forEach(function(key) {
        console.log(key);
        TodoList.findByIdAndDelete(key, function(err) {
            
            if (err) {
                console.log('Error in deleting an item from database', err);
                return;
            }
            console.log('item is deleted');
        });
    });
  
    res.redirect('/');
    //console.log(req.body);
    // let id = req.body.selectedTodos;
    //  console.log(id);
    // TodoList.deleteMany({_id:id}, function(err) {
    //     if (err) {
    //       console.log("Error in deleting from db");
    //     } 
    //     return res.redirect('back');
    //   });
    
};
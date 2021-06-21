const mongoose=require("mongoose");

mongoose.connect("mongodb://localhost/todo_list_DB");

const db=mongoose.connection;

db.on('error',console.error.bind(console,"Error in connecting to Databse"));

db.once('open',function(){
    console.log("sucessfully connected to the Database!!!");
});
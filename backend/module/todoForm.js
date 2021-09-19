var db = require('../dbconnection'); //reference of dbconnection.js file

var Task ={
    getTodo:function(callback)
    {
        return db.query("select * from todo", callback);     
    },

     getTodoById:function(id, callback)
     {
      return db.query("select * from todo where id=?",[id],callback);
     },
  
     addTodo:function(data,callback)
      {
        return db.query("Insert into todo (todoname,status) values(?,?)",[    
        data.todoname, 
        data.status
      ],callback );
      },

     deleteTodo:function(id,callback)
     {
        return db.query("delete from todo where id=?",[id],callback);
     },
     editTodo:function(id,data,callback)
     {
        return db.query("update todo set todoname=?,status=? where id=?",[
          data.todoname,
          data.status,
          id
        ],
          callback);
     },
    
    
    };


module.exports = Task;
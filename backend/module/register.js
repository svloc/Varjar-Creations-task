var db = require('../dbconnection'); //reference of dbconnection.js file

var Task ={
    getRegister:function(callback)
    {
        return db.query("select * from register", callback);     
    },

     getRegisterById:function(id, callback)
     {
      return db.query("select * from register where id=?",[id],callback);
     },
  
     addRegister:function(data,callback)
      {
        return db.query("Insert into register (googleId,email,name,imageUrl) values(?,?,?,?)",[    
          data.googleId, 
          data.email, 
          data.name, 
          data.imageUrl, 
      ],callback );
      },

     deleteRegister:function(id,callback)
     {
        return db.query("delete from register where id=?",[id],callback);
     },
     editRegister:function(id,data,callback)
     {
        return db.query("update register set googleId=?,email=?,name=?,imageUrl=? where id=?",[
          data.googleId, 
          data.email, 
          data.name, 
          data.imageUrl, 
          id
        ],
          callback);
     },
    
    
    };


module.exports = Task;
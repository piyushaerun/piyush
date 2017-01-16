var mysql      = require('mysql');  
var fs=require('fs');
var connection = mysql.createConnection({  
  host     : 'localhost',  
  user     : 'root',  
  password : '',  
  database : 'android'  
});  

var i=1; 
connection.connect(); 
//function abc()
//{
  for(var i=1;i<=7;i++)
  {
connection.query('SELECT name FROM callback where sno='+i, function(err, rows2, fields)   
{  
  if (err) throw err;  
  
   
connection.query('SELECT city FROM callback where name='+"'"+rows2[0].name+"'", function(err, rows1, fields)   
{  
  if (err) throw err;  
  
  console.log(rows2[0].name);
  console.log(rows1[0].city);
  if(i==7)
	  connection.end(); 

}); 

});  

  }
 
//}
console.log("End");
//
//abc();
var mysql      = require('mysql');  
var connection = mysql.createConnection({  
  host     : 'localhost',  
  user     : 'root',  
  password : '',  
  database : 'android'  
});  
connection.connect();  
  
connection.query('insert into  piyush values(874,"sammy")', function(err, rows, fields)   
{  
  if (err) throw err;  
  
  console.log(rows);  

});  
  
connection.end();  
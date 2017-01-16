var mysql      = require('mysql');  
var connection = mysql.createConnection({  
  host     : 'localhost',  
  user     : 'root',  
  password : '',  
  database : 'android'  
});  
connection.connect();  
  
connection.query('update  piyush set name="piuy" where id=1000', function(err, rows, fields)   
{  
  if (err) throw err;  
  
  console.log(rows);  

});  
  
connection.end();  
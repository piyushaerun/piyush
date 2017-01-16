var mysql      = require('mysql');  
var connection = mysql.createConnection({  
  host     : 'localhost',  
  user     : 'root',  
  password : '',  
  database : 'android'  
});  
connection.connect();  
  
connection.query('SELECT * FROM piyush', function(err, rows, fields)   
{  
  if (err) throw err;  
  
  console.log(rows);  

});  
  
connection.end();  
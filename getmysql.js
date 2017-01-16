 var express = require('express');
var app = express();
var fs=require("fs");
var mysql = require("mysql")

var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

var connection = mysql.createConnection({
	host: 'localhost',
	user: 'root',
	password: '',
	database: 'android'

});

connection.connect(function (error){
			if(!!error)
			{
				console.log('Error');
			}
			else
			{
				console.log('Connected');
			}	   
});
	
// respond with "hello world" when a GET request is made to the homepage
app.get('/', function (req, res) {
	
   res.writeHead(200, {'Content-Type': 'text/html'});  
   fs.createReadStream("./db1.html").pipe(res);	
});
   //res.send("<form action='add.html' method='post'> firstname:<input name='name1'/><br>lastname:<input name='name2'/><br>email:<input name='email1'><br>pass:<input name='pass1'><br><input type='submit'>");
app.get('/add.html',function(req,res){
var id1=req.param('id1');
  var firstname=req.param('name1');
  var lastname=req.param('name2');
  var emailid=req.param('email1');
  var password=req.param('pass1');
  
 // res.send(firstname+lastname+emailid+password);
  
  connection.query("INSERT INTO click  values ("+id1+", '"+lastname+"','"+emailid+"')");
  
  connection.query('SELECT * from click ', function(err, rows, fields)   
{  
  if (err) throw err;  
  
  //console.log(rows[0]);  
  console.log(rows);  
});  

connection.end();
res.end();
  
})

app.listen(4001);
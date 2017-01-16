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
   fs.createReadStream("./db.html").pipe(res);	
   //res.send("<form action='add.html' method='post'> firstname:<input name='name1'/><br>lastname:<input name='name2'/><br>email:<input name='email1'><br>pass:<input name='pass1'><br><input type='submit'>");
})

app.post('/add.html',function(req,res){
  //res.send(req.body.name1+req.body.name2+req.body.eamil1+req.body.pass1);
  
  var firstname=req.body.name1;
  var lastname=req.body.name2;
  var emailid=req.body.email1;
  var password=req.body.pass1;
  
  res.send(firstname+lastname+emailid+password);
  
  connection.query("INSERT INTO click  values ('"+firstname+"', '"+lastname+"','"+emailid+"')");
  
  connection.query('SELECT * from click limit 2', function(err, rows, fields)   
{  
  if (err) throw err;  
  
  //console.log(rows[0]);  
  console.log(rows);  
});  

connection.end();
  
})

app.listen(3333);
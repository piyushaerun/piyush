var http= require('http');
//hostname='127.0.0.1';
var server=http.createServer(function(req,res)
{
	//res.setHeader('content-type','text/plain');
res.end("kjgj");
});
server.listen(4000,hostname,function(){
console.log("server run");
}
);

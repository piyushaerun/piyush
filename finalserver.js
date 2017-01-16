var http = require("http");  
var fs=require("fs");

var error404=function(response){
	response.writeHead(404, {'Content-Type': 'text/plain'});  
    response.write("ERROR 404: Page Not Found!");
    response.end(); 
};
onRequest=function(request, response) {  
	if(request.method=="GET"&&request.url=="/"){
		response.writeHead(200, {'Content-Type': 'text/plain'});  
    	response.write("/Trt to connect other page        ");
    	response.write("        /Next Page is onetheme");
    	response.end();  
	}
	else if(request.url=="/facebook"){
		response.writeHead(200, {'Content-Type': 'text/html'});  
		fs.createReadStream("./onetheme.html").pipe(response);
	}
	else if(request.url=="/profile"){
		response.writeHead(200, {'Content-Type': 'text/html'});  
		fs.createReadStream("./abc/log.html").pipe(response);
	}
	else if(request.url=="/logged_in"){
		response.writeHead(200, {'Content-Type': 'text/html'});  
		fs.createReadStream("./abc/loggedin.html").pipe(response);
	}
	
	else if(request.url=="/theme.html"){
		response.writeHead(200, {'Content-Type': 'text/html'});  
		fs.createReadStream("./theme.html").pipe(response);
	}
	
	else if(request.url=="/style"||request.url=="/style2.css"||request.url=="/main.css"){
		response.writeHead(200, {'Content-Type': 'text/css'});  
		fs.createReadStream("./"+request.url).pipe(response);
	}
	else if((request.url).indexOf(".png") != -1){
		response.writeHead(200, {'Content-Type': 'image/png'});  
		fs.createReadStream("./"+request.url).pipe(response);
	}
	else if((request.url).indexOf(".jpg") != -1){
		response.writeHead(200, {'Content-Type': 'image/jpg'});  
		fs.createReadStream("./"+request.url).pipe(response);
	}
	else if((request.url).indexOf(".js") != -1){
		response.writeHead(200, {'Content-Type': 'text/javascript'});  
		fs.createReadStream("./"+request.url).pipe(response);
	}
	else{
		error404(response);
	}
};

http.createServer(onRequest).listen(8886);
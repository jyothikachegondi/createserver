var http=require('http');
var imp=require('./second_module');

http.createServer(function(req,res){
    res.writeHead(200,{'Content-Type':'text/html'});
    res.write(imp.msg()); 
    res.end();
}).listen(2000); 
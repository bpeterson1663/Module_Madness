var http = require('http');
var balance = require('./calBalance.js');


http.createServer(function(req,res){
    res.writeHead(200);
    res.write(balance.textBal + balance());
    res.end();
}).listen(8000);

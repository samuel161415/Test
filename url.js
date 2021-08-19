var http = require('http');
var url = require('url');

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  // var address='http://:8080localhost/default.htm?month=february&year=2017';
  // var q = url.parse(req.address, true).query;
//  var txt = q.year + " " + q.month;
res.write('Tutorial');
  res.end(txt);
}).listen(8080);
var url=require('url');
var address='http://:8080localhost/default.htm?month=february&year=2017';
var add=url.parse(address,true);
//console.log(add.host,add.pathname,add.protocol);
console.log("Host :"+add.host);
console.log("pathname :"+add.pathname);
console.log("protocol :"+add.protocol);
var qdata = add.query;
console.log(qdata.month);
console.log(qdata.year);
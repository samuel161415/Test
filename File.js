var http=require('http');
// To read functions
var file=require('fs');
http.createServer(function(req,res){
    file.readFile('file.html',function(err,data){
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write(data);
        res.end();
    })

}).listen(8070);
// used to create new file using append method
file.appendFile('mynewfile1.txt', 'Hello content!', function (err) {
    if (err) throw err;
    console.log('Saved!');
  })
  // to create file using open method
  file.open('mynewfile2.txt', 'w', function (err, file) {
    if (err) throw err;
    console.log('Saved!');
  });
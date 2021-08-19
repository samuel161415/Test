var path=require('path');
var fname=path.parse(__filename);
console.log(fname);
const os=require('os');
var totalMemory=os.totalmem();
var freeMemory=os.freemem();
console.log("the total memory :"+totalMemory+" the free memory :"+freeMemory);
const fs=require('fs');
var files=fs.readdirSync('./');
console.log(files);
fs.readdir('$',function(err,file){
  if(err)
  console.log(`error : ${err}`);
  else console.log(file);
});
var EmmiterEvent=require('events');  // here EmmiterEvent class is created
var emitter=new EmmiterEvent(); // emitter object is created
emitter.on('messageLoged',function(args){
  console.log('listen to the event',args);
})
emitter.emit('messageLoged',{id:1,url:"http//google.com"});// event is raised

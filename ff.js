 let file=require('fs');
 file.open('mynewfile1.txt','w',function(err,file){
     if(err)throw err;
     console.log('cheba');
 });

//  file.writeFile('newFile.txt','This is new content', function(err){   // if there is a file with content in it then it overwrites it
//      if(err)throw err;
//      console.log('successful');
//  })

//  file.appendFile('newFile.txt','this is additional content',function(err){ // to add texts at the end of the file's text
//      if(err)throw err;
//      console.log('cheba');
//  });
 file.unlink('mynewfile1.txt',function(err){ // to delete a file with the specified name
     if(err)throw err;
     console.log('deleted succesfully');
 })
 file.rename('mynewfile2.txt','samifile',function(err){
    if(err)throw err;
    console.log('renamed successfully');
 })
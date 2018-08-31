const fs = require('fs');

fs.writeFile('data.html','hello this file created','utf8',(err)=>{
if(err)
return err;
console.log("the file has been saved!!");
});
fs.appendFile('data.html','extra data added','utf8',(err)=>{
  if(err)
  return err;
  console.log("FILE SAVED!!!");
});
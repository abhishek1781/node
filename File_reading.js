const fs = require('fs');

fs.readdir('.',(err,content)=>{
    if(err)
    throw err;
    console.log(content);
});
fs.readFile('INFO.html','UTF-8',(err,content)=>{
    console.log(content);
});
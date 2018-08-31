const fs = require('fs');
if(!fs.exists("vi")){
fs.mkdir("vi",(err)=>{
    if(err)return err;
    fs.writeFile("./vi/new.html",'this is the directory',(err)=>{
        if(err)return err;
        console.log("file data saved");
    });
});
}
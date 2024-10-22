const fs = require('fs');

// const textIn = fs.readFileSync("./txt/input.txt","utf8");

// console.log(textIn);

// const textOut = `This is what we have written and created a new file for it ${textIn}. \n Created on ${Date.now().toLocaleString()}`;
// fs.writeFileSync("./txt/outPut.txt", textOut);
// console.log("File created")


// const append = fs.appendFile("./txt/appened.txt","Hi my name is anthony gonzalvis", function(err){
//   if(err) console.log(err);
//   else console.log("Data written");
// });

// fs.readFile("./txt/start.txt", 'utf-8',(err,data1)=>{
//   fs.readFile(`./txt/${data1}.txt`, 'utf-8',(err,data2)=>{
//     console.log(data2);
//     fs.readFile(`./txt/append.txt`, 'utf-8',(err,data3)=>{
//       console.log(data3);
//       fs.writeFile(`./txt/final.txt`,`${data2}\n ${data3}` ,'utf-8',err=>{
//         console.log("Your file has been sucessfully written.")
//       })
//     })
//   })
// })

// console.log("First I'll be read")

const http = require('http');
const data = fs.readFileSync(`./dev-data/data.json`,'utf-8');
const dataObj = JSON.parse(data);


var server = http.createServer((req,res)=>{
  if(req.url === '/'){
    res.end("Home-page")
  }else if(req.url === '/profile'){
    res.end("profile-page");
  }
    else if(req.url === '/api'){
      res.writeHead(200,{'Content-type':'application/json'})
        res.end(data);
      
    }
  
  else {
    res.writeHead(404);
    res.end("Page not found");
  }
});

server.listen(3000);
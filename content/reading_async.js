const {readFile, writeFile} = require("fs");

console.log("start")

  const first = readFile("./result_sync.txt","utf8", (err , result)=>{
    if(err){
        return console.log(err);
    }
}
)

const second = readFile("./result_sync.txt","utf8", (err , result)=>{
    if(err){
        return console.log(err);
    }
}
)
    

writeFile("./total.txt",
`here is the result ${first}, ${second}`, {flag:'a'},
 (err, result) => {
    if(err){
        return console.log(err);
    }

  //  console.log(`result: ${result}`);
 }

);

console.log("done with this task")
console.log("starting the next");
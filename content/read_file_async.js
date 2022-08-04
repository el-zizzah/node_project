const {readFile, writeFile} = require("fs");

console.log("start")
readFile("./result_sync.txt","utf8", (err , result)=>{
    if(err){
        return console.log(err);
    }

    const first = result;
    readFile("./result_sync.txt","utf8",(err, result) =>{

        if(err){
            return console.log(err);
        }


    const second = result;
    writeFile("./result_async.txt",
    `here is the result ${first}, ${second}`, {flag:'a'},
     (err, result) => {
        if(err){
            return console.log(err);
        }

      //  console.log(`result: ${result}`);
      console.log("done with this task")

     }
    
    );
    })
})


console.log("starting the next");
/* /* const os = require("os");

const user = os.userInfo();
console.log(user);


const systeminfo ={
    name: os.type(),
    realsedate : os.release(),
    totalmem : os.totalmem(),
    freemem : os.freemem()

}

console.log(systeminfo); */

/* const {readFileSync, writeFileSync} =require("fs");

const first = readFileSync("./content/subfolder/test.txt","utf8");

const second = readFileSync("./content/second.txt", "utf8");

console.log(first, second);

const result = writeFileSync("./content/result_sync.txt",

`this the resukt the wriye ${first},${second}`,{flag: "a"})

 


 */











const http = require("http")


const server = http.createServer( (req , res)=>{
    if (req.url === "/"){
    res.end("welcome the our first home page ");

    }

    if(req.url ==="/about"){
        res.end(`<h1> this  about us home oage</>`)
    }

    
    res.end(`
    <h1> opps </h1>
    <a href ="/" > back home page
    <p>This is a test </p>`)
    
})

server.listen(8080);
const { sep } = require("path");
const path =require("path")


console.log(path,sep);

const pathfile =path.join(`/content`,`subfolder`,`test.txt`)
const base =path.basename(pathfile) 
const absolute = path.resolve(__dirname,"content","subfolder","text.txt")

console.log(pathfile);
console.log(absolute);
const pal= function(p){
    var re="";
    for(let i=p.length-1; i>=0;i--){
        re=re+p[i];
    }
    return re;
}
console.log(pal("shubam"))

const prompt = require("prompt-sync")();

let str = prompt("Enter a stirng:")
if(pal(str)==str){
    console.log("Palindrome")
}else{
    console.log("not palindorme")
}

//synchrnous and asychronous 



//synchronous 
// here the code executes line by line ,doesnt skip anything ..


//asynchronous 
//here the code which can be executed later ,like setTimeout 
//Api calls ,DB Connections are called asynchrnous process


// function add(a,b){
//   return a+b;
// }
// let a=8;
// let b=9;
// console.log("in process");
// let res = add(a,b);
// console.log("value is ",res)
// console.log("done");


//asynchronous 

console.log("in process");

let c=8;let d=10;

//1000ms = 1sec

setTimeout(()=>console.log("done"),2000);

console.log("value is ",c+d);


//-------setTimer-----------------
setTimeout(()=>console.log("start"),)
let i=0;
let interval= setInterval(()=>console.log(i++),1000);


setTimeout(()=>clearInterval(interval),5000);

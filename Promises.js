// //promises
// //is used to handle async operations
// //pending ,fulfilled ,Rejected

// //https://javascript/user

// let fetch = require("fetch")

// fetch('https://jsonplaceholder.typicode.com/todos/1')
//   .then(response => response.json())
//   .then(json => console.log(json))

//promises

// let promise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     if (true) {
//       resolve();
//     } else {
//       reject();
//     }
//   }, 2000);
// })
//   .then(() => console.log("success"))
//   .catch(() => console.log("failure"));

console.log("person1 shows the ticket"); //sync

console.log("person2 shows the ticket "); //sync

//async await

async function promise() {
  let newPromise = new Promise((resolve, reject) => {
    let ticket = true;
    setTimeout(() => {
      if (ticket) {
        resolve();
      } else {
        reject();
      }
    }, 2000);
  });

  await newPromise;
  console.log("miraj: i got the ticket lets go in ..");
  console.log("imran: i am hungry ,want something to eat");

  let promise2 = new Promise((res, rej) => {
    setTimeout(() => res(), 3000);
  });

  await promise2;

  console.log("i got some popcorn");
}

promise();

//promise chaining

// let promise = new Promise((resolve,reject)=>{
//   let ticket=false;
//   setTimeout(()=>{
//   if(ticket){
//     resolve();
//   }
//     else{
//       reject();
//     }
//   },2000)

// }) .then(()=>{
//   console.log("miraj: i got the ticket lets go in ..");
//   console.log("imran: i am hungry ,want something to eat");

//   return new Promise((res,rej)=>{
//     setTimeout(()=>res(),3000)
//   }).then(()=>console.log("i got some popcorn"))
// })
// .catch(()=>console.log("no ticket"));

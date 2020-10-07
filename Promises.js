//promises
//is used to handle async operations
//pending ,fulfilled ,Rejected

//https://javascript/user


let fetch = require("fetch")


fetch('https://jsonplaceholder.typicode.com/todos/1')
  .then(response => response.json())
  .then(json => console.log(json))















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

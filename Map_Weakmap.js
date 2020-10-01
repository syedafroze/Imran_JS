let user1={
  name:"syed",
  id:8,
  position:"devOps" 
}



let Users ={};//empty Regular Object 


Users[user1]=1;//added user1 as key to Users

let user2={
  name:"imran",
  id:9,
  position:"devOps",
 
}
Users[user2]=2;//addding user2 as akey in Users 

console.log(Users)

//Objects cannot store multiple objects as a key in it .


//-----------Weakmap
// {
//   let x={};
  
//   var map = new WeakMap();
//   map.set(x,2);
// }



// console.log(map)

//-------------Map-------------

// let user1={
//   name:"syed",
//   id:8,
//   position:"devOps" 
// }

// let user2={
//   name:"syed",
//   id:8,
//   position:"devOps" 
// }


// let Users= new Map();


// Users.set(user1,1).set(user2,2);

// console.log(Users)



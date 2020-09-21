//Object -data Structure 

let emp1 ={
  name:"syed",
  id:"5"
}

//Object literal 
let emptyObj ={};
//object creation by constrcutor method 
let constructorObject = new Object();



//adding properties to an empty object 
let newObj={};

newObj.gender="male";

console.log(newObj)


let emp2 ={
  name:"syed",
  id:"6"
}
//accessing property values from object using (.) dot operator 

console.log(emp2.id);

//Object methods 

//Object.assign
//used to copy one object datat to another Object

let obj1={name:"syed"};

let obj2=Object.assign({},obj1);
console.log(obj2);//
obj2.name="khan"
console.log(obj1);
console.log(obj2);

//








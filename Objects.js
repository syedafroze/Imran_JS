//Object -data Structure 

// let emp1 ={
//   name:"syed",
//   id:"5"
// }

//Object literal 
// let emptyObj ={};
//object creation by constrcutor method 
// let constructorObject = new Object();



// //adding properties to an empty object 
// let newObj={};

// newObj.gender="male";

// console.log(newObj)


// let emp2 ={
//   name:"syed",
//   id:"6"
// }
// //accessing property values from object using (.) dot operator 

// console.log(emp2.id);

//Object methods 

//Object.assign
//used to copy one object datat to another Object

// let obj1={name:"syed"};

// let obj2=Object.assign({},obj1);
// console.log(obj2);//
// obj2.name="khan"
// console.log(obj1);
// console.log(obj2);

//8:30-5:30

// let data={
//   name:"syed",
//   id:6,
//   gender:"male"
// }

//Object to Array convertion

// let ObjToArr = Object.entries(data);
// console.log(ObjToArr)

//Object.keys 

// console.log(Object.keys(data));

// console.log(Object.values(data));


// for(i in data){
//   console.log(data[i])
// }


// const  data2={
//   name:"syed",
//   id:6,
//   gender:"male"
// }
// Object.freeze(data2)
// data2.name="Arbaaz";//
// console.log(data2);

let emp1={
  name:"syed",
  id:4
}

let emp2={
  name:"sadiq",
  id:7
}

//functions
//factory functions
// function Employee(name,id){

//   return {
//     name:name,
//     id:id
//   }
// }



// let emp3 = Employee("miraj",8);

// emp3.gender="male";
// console.log(emp3);


//constructor  emp4={} 
//"this" will be pointing to current Object

// function Employee(name,id){
//   this.name=name;
//   this.id=id;
// }

// let emp4= new Employee("saba",8);
// emp4.name="samrin"
// console.log(emp4);
// let emp5=new Employee("sana",9);
// console.log(emp5)
// let emp6=new Employee("saniya",10);
// console.log(emp6)
//name ,id 

//class 


class Student{
constructor(name,id){
  this.name=name;
  this.id=id;
}
}

let emp6 = new Student("naseer",7)
console.log(emp6);







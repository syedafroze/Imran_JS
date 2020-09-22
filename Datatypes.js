//datatypes are of two types
/*
Primitive Datatypes  -(Number,String,Boolean..)
Non primitive datatypes also called Reference Datatypes -(Arrays,Objects,functions)

Primitive datatypes (data is stored on stack memory );

Non Primitives Dataypes (data is stored on Heap memory);


*/

let num =5;
let num2= num;//5
num2=num2+1;//6
console.log(num);//5 
console.log(num2);

let obj={
  name:"syed"
}

let obj2 = obj;

obj2.name="khan"
console.log(obj);//{name:"khan"}
console.log(obj2);//{name:"khan"};




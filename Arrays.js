// index        0        1     2       3
let names = ["syed", "sadiq", "imran", "abu"];

let arr = [3, 2, 4, 1, 5, 6, 9]; //5,6,9

//map
//[false,,true]

//filter  
//[5,6,9]
let resArr = arr.filter( (val)=> (val>4) );

console.log(resArr);





// let resArr = [];//[5,6,9]

// for (i = 0; i < arr.length; i++) {
//   if (arr[i] > 4) {
//     resArr.push(arr[i]);
//   }
// }

//console.log(resArr)





///[9,4,,16,1]
//ArrayName.map(function)
// let res = arr.map( (val) => val*val );
// console.log(res);

///[9,4,16,1]

// for(i=0;i<arr.length;i++){
//  console.log( arr[i]*arr[i]);
// }

//----------------------length of array-------------
//length - number of elements in an array
let len = names.length;

//console.log(len); //5

//---------------------------- slice method -------------------------
//   slice(startIndex ,endIndex+1)

let copiedArr = names.slice(1, 3);

// console.log(copiedArr);

// console.log(names);

//-----------------------------splice method-------------------------
//splice  - used to remove elements from an array ,
//u can also add elements to an array ausing splice

//splice(startIndex,no_of elements to be removed)

// let deletedValues = names.splice(1,0,"arbaaz");
// console.log(deletedValues)
// console.log(names);

//--------------------------------indexOf --------------------------------
///indexOf - it gives index of the element where it has occured for first time ...
let arr2 = [3, 4, 3, 5, 2, 3, 4, 2];

//--------------------find method-----------------------

//console.log(arr.find(function(x){ return x==3)});
//find - returns the first value that satify the condition;

//---------------------findIndex ----------------------
//console.log(arr.findIndex(function(x){ return x==3)});
//findIndex - return the index of the first value that satisfy the condition.

//console.log(arr.indexOf(3));

//----------------------join method---------------------
//its used to covert array to string
// let str = "syed";

// let strArr = str.split('');//string to array

// let newStr = strArr.join('_');//syed

// console.log(strArr,newStr);

//-----------------lastIndexOf ------------------

///lastIndexOf - it gives index of the element where it has occured for last time ...

//console.log(arr.lastIndexOf(3))

//----------------------printing all values of an array
// for (i = 0; i < arr.length; i++) {
//   console.log(arr[i]); //"sadiq" "sadiq"
// }

///----------------------------- push() -----------------
//adds element to the end of an array
// names.push("miraj");
// console.log(names);

//------------------------------ pop()--------------------
//removes element from the last
// names.pop();
// console.log(names);

//------------------------------ unshift()-----------------
//adds values to the begining of the array
// names.unshift("reyaan");
// console.log(names);
//---------------------------------shift()--------------------
//removes element from begining of the array
// names.shift();
// console.log(names);

//-----------------------------------sort()-------------------
//sort()
//sorts the array in alphabetical order
// names.sort();
// console.log(names);

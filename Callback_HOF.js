//add function 

function add(a,b){
  return a+b;
}

//avg function
function avg(Addfunc,num1,num2){
  
  let sum = Addfunc(num1,num2);
  
  let Average = sum/2; 
  
  return Average;
}


//add - callback function 

//callback function -a function that is passed as parameter 
//to another function is called callback function


//avg - higher Order function
//HOF - a function that accepts another function 
//as its paramter is called Higher Order Function..

let result = avg(add,2,3);

console.log(result);



//1 2 ,3 
//sum of the numbers /number of values 
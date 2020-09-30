
// // function add(num,num2){ //function declaration

// //   let c= num+num2 ;     ///function definition
// //   return c;                
// // }

// let add = function(num,num2){ //function declaration
//   let c= num+num2 ;     ///function definition
//   return c;                
// }



// //Arrow functions /fat arrow func

// let add = (num,num2)=> {
//       return num+num2;
// }

//NaN - Not a Number 
//default parameters  
// let add  =(num=0,num2=0) =>  num+num2 ; //0

// let result = add(2,3);//function call 

// console.log(result); //



//semantic versioning
//React 16.10.0

//library -limited  (javascript)

//{} return 

// let square = x => x*x; 

// square(5);//functiona call


//recursive function - function calling itself 

//factorial 5! = 5*4*3*2*1 = 120
//1!=1  0!=1
//5*4*3*2*1 
//(5)*(5-1)*(5-2)*(5-3)*(5-4)

function factorial(num){

  if(num==1){
    return 1;
  }
  else{
    return num*factorial(num-1);//5*fact(4)
  }
}
console.log(factorial(5));
/*
factorial(5)
return 5*4*3*2*1=120;
factorial(4)
return 4*3*2*1
factorial(3)
return 3*2*1;
factorial(2);
return 2*1;
factorial(1);
return 1;
*/

//currying functions

function mul(a){
  console.log(a);
    return function(b){
  console.log(b);//
      return function(c){
        console.log(a*b*c);
      }
    }
  }
  
  let res = mul(2);
  console.log(res)
  // console.dir(res)
  let res2 = res(3);//function c
  console.dir(res2)
  console.log(res2(4));
  // console.log(res2);
  
  

  ///IIFE
//imediately involed function expression

//(function fun(){console.log("IIFE")})()

  
  //Display Date and Time

  //setInterval(()=>document.getElementById("date").innerHTML=new Date(),1000);
  //html
  //<h2 id="date"></h2>
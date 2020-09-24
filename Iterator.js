//iterator and generator 


function *generator(){
  yield "api1";
  yield "api2";
  yield "api3";
  
}

let iterator = generator();

console.log(iterator.next());
console.log(iterator.next())
console.log(iterator.next())
console.log(iterator.next())

//iterator.next()





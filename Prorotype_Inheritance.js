//prototype inheritance 

//Employee constructor 
function Employee(name,id){
  
  this.name= name;
  this.id=id;
 
}
Employee.prototype.getDetails= function(){return this.name+" "+this.id;}
console.dir(Employee)





function IBMEmployee(name,id,position){
  
  this.name=name;
  this.id=id;
  this.position=position
}

IBMEmployee.prototype = Object.create(Employee.prototype)

let emp3 = new IBMEmployee("saba",5,"Developer");

console.dir(IBMEmployee);

console.log(emp3.getDetails())


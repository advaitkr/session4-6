//Create an object calledTeacherderived from thePersonclass, 
//and implement a method calledteachwhich receives a string calledsubject, 
//andprints out:

const Person = function(){}

Person.prototype.initialize = function(name,age){
    this.name = name;
    this.age = age;
}

const Teacher = function(){
    this.teach = function(subject){
        console.log(this.name +" "+"is now teaching"+" "+subject)
    }
}

Teacher.prototype = new Person()
const him = new Teacher()

him.initialize("Adam",45);
him.teach("Inheritence")


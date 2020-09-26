"use strict";

function student(name, city) {
  this.name = name;
  this.city = city;

  this.getDetails = function () {
    console.log('Welcome', this.name, 'from', this.city);
  };
}

var stud = new student('prathi', 'mysuru');
console.log(stud);
stud.getDetails();
var stud1 = new student('thanu', 'banglore');
console.log(stud1);
stud1.getDetails();
student.prototype.studId = 90;

student.prototype.greetMessage = function (username) {
  console.log('Great Day ', username);
};

stud.greetMessage('thanu');
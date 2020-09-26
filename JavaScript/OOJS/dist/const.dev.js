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
var stud1 = new student('thanu', 'banglore');
console.log(stud1);
stud.getDetails();
stud1.getDetails();
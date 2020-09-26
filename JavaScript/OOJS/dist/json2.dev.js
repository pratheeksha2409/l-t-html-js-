"use strict";

var x = 10;
x = 200; // prints 200

console.log(x);
{
  var _x = 20; // block scope
}
console.log(x);
var y = 90; // y=100;

console.log(y); //  for(let i=0;i<5;i++)
//      setTimeout(
//          ()=>console.log(i),1000);
// var greet = function(){
//     for (var a = 0; a < 1; a++) {
//         console.log("Hi");
//     }
//     console.log(a);
// }
// greet();

var HOBBIES = ["sports", "music", "dance"]; // HOBBIES = "Reading";

HOBBIES.push("Reading");
console.log(HOBBIES);
HOBBIES.pop();
console.log(HOBBIES); //  HOBBIES=[];

var student = {
  name: 'Ram',
  age: 20
};
student.age = 21;
console.log(student); // student={}
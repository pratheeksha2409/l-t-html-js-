"use strict";

function sayHello(name) {
  name = name != undefined ? name : 'Rahul';
  console.log('hello', name);
}

sayHello();

function welcome() {
  var name = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'priya';
  // console.log('welcome',name)
  return "welcome ".concat(name); // return('welcome '+name)
} //welcome();


var sample = function sample() {
  var greet = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : welcome();
  console.log(greet);
};

sample();

function sum(x) {
  var y = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 10;
  console.log(x + y);
}

sum(4); //parameters have own scope

total = function total() {
  var x = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 10;
  var y = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : x;
  var z = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : x + y;
  console.log(x + y + z);
};

total(); //parameters should be initialized first
// ntotal = function(x=y,y=1){
//     console.log(x+y+z);
// }
// ntotal();
//parameters have own scope

total = function total() {
  var x = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
  var y = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 2;
  var z = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 3;
  console.log(arguments.length);
  console.log(x + y + z);
};

total(10);
total(10, 20);
total(10, 20, 30);
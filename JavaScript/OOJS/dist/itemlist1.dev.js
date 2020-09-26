"use strict";

var name = 'Raju';
var city = 'Bangalore';
var msg = 'Have a good day.' + 'welcome to jS';
var details = name + ' is from ' + city;
console.log(details);
console.log(name, 'is from', city);
console.log(msg);
{
  var a = 20;
} // console.log(a);
//using backticks

var msg = "Have a good day.\n          welcome to jS"; //template strings

var details = "".concat(name, " is from ").concat(city);
console.log(details);
console.log("".concat(name, " is from ").concat(city));
console.log(msg);
var price = 90;
var quantity = 45;
console.log("Total cost is, ".concat(price * quantity));
console.log('Total cost is', price * quantity);
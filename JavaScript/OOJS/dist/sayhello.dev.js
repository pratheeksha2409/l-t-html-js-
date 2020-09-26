"use strict";

var _console;

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

var newarr = [90, 20, 110, 50, 60];
console.log(Math.max(newarr)); // returns NaN

console.log(Math.max(90, 20, 110, 50, 60)); //110
//spreading the array
//turns the array into list of values
//spread operator

console.log(Math.max.apply(Math, newarr));
var arr1 = [1, -2, 3, 4];
var arr2 = [8, 3, -8, 1];
console.log(Math.max.apply(Math, arr1.concat(arr2))); //can be combined with other values

console.log(Math.max.apply(Math, [10].concat(arr1, [20], arr2)));
var msg = "Hello";

(_console = console).log.apply(_console, _toConsumableArray(msg));

'Spring in action'; // 'javascript'

var sumfun = function sumfun(a, b, c) {
  console.log(a + b + c);
};

sumfun.apply(void 0, [10, 20, 30]);

var greet = function greet(a, b, c) {
  console.log(a + b + c);
};
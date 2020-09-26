"use strict";

names = ['Ram', 'Tom', 'Raju'];
names.forEach(function (elem, index, arr) {
  console.log(elem);
});

function greet() {
  console.log('Great day');
}

var greet1 = function greet1() {
  console.log('Great day 1');
};

var greet2 = function greet2() {
  console.log('Great day 2');
};
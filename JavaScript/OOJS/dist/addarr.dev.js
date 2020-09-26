"use strict";

var sumfun = function sumfun(arr) {
  var sum = 0;

  for (var i in arr) {
    sum += arr[i];
  }

  console.log(sum);
}; //rest


sumfun = function sumfun() {
  var sum = 0;

  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  for (var i in args) {
    sum += args[i];
  }

  console.log(sum);
};

sumfun();
sumfun(10, 20);
sumfun(20, 30, 40);

fun = function fun(a, b) {
  console.log("a", a);
  console.log("b", b);

  for (var _len2 = arguments.length, args = new Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
    args[_key2 - 2] = arguments[_key2];
  }

  console.log(args);
};

fun(1, 2, "hello", 900);
fun(1);
fun(1, 2);

function sumNumbers() {
  for (var _len3 = arguments.length, args = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
    args[_key3] = arguments[_key3];
  }

  return args.filter(function (n) {
    return typeof n === 'number';
  }).reduce(function (previous, current) {
    return previous + current;
  });
}

console.log(sumNumbers(30, null, 40, undefined, '30abc'));
console.log(sumNumbers(20, null, 50, undefined, '20abc'));
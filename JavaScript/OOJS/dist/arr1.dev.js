"use strict";

var arr = [10, 20, 30];

for (var i in arr) {
  console.log(arr[i]);
}

arr[6] = 90;

for (var _i = 0, _arr = arr; _i < _arr.length; _i++) {
  var val = _arr[_i];
  console.log(val);
}

var _iteratorNormalCompletion = true;
var _didIteratorError = false;
var _iteratorError = undefined;

try {
  for (var _iterator = "Javascript"[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
    var _val = _step.value;
    console.log(_val);
  }
} catch (err) {
  _didIteratorError = true;
  _iteratorError = err;
} finally {
  try {
    if (!_iteratorNormalCompletion && _iterator["return"] != null) {
      _iterator["return"]();
    }
  } finally {
    if (_didIteratorError) {
      throw _iteratorError;
    }
  }
}

arr.forEach(function (value, index) {
  console.log(value, index);
});
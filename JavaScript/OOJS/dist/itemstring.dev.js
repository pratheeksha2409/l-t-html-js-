"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

// class Student{
//     constructor(fname,lname){
//         this.lname = lname;
//         this.fname = fname;
//     }
//     getName(){
//         return this.fname+" "+this.lname;
//     }
//     setName(first,last){
//         this.lname = last;
//         this.fname = first;
//     }
// }
// var stud = new Student('Raj','Mohan');
// stud.setName('Ram','Kumar');
// console.log(stud.getName());
var Student =
/*#__PURE__*/
function () {
  function Student(fname, lname) {
    _classCallCheck(this, Student);

    this.lname = lname;
    this.fname = fname;
  }

  _createClass(Student, [{
    key: "firstName",
    get: function get() {
      return this.fname;
    },
    set: function set(first) {
      this.fname = first;
    }
  }, {
    key: "fullName",
    get: function get() {
      return this.fname + " " + this.lname;
    }
  }]);

  return Student;
}();

var stud = new Student('Raj', 'Mohan');
stud.firstName = 'Ram';
console.log(stud.firstName);
console.log(stud.fullName); //using backticks

/*var varb=`betty bought some butter.
good day`;*/
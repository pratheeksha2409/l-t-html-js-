var stud={
    name:'Ram',
    empId:20,
    hobbies:['Music','dance'],
    address:{
        city:'Mysuru',
        state:'Kar'
    }
};
var jsonstring=JSON.stringify(stud);
console.log(jsonstring);
var jsobj=JSON.parse(jsonstring);
console.log(jsobj);
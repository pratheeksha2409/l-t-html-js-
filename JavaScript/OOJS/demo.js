var student={
    name:'Raju',
    age:23,
    hobbies:['Sports','Music'],
    address:{
        city:'Banglore',
        state:'Karnataka'
    }
};
//console.log(student);
console.log(student.name);
console.log(student.address.city);

student.studId=20;
student.hasMobile=true

for(const key in student){
    const element=student[key];
    console.log(key+" "+element);
}

var student1={
    name:'Raju',
    studid:20
};
console.log(student1.name);
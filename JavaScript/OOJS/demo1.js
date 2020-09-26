var student = {
    name:'Ram',
    age:20,
    hobbies:['dance','music'],
    greet:function(){
        console.log('Good day ')
    },
    address:{
        city:'Bangalore',
        state:'KAR'
    }
}
// console.log(student);
for (const prop in student) {
  var stud = student[prop]; 
//    console.log(typeof stud); 
if(stud instanceof Array){
   for (const i in stud) 
      console.log('hobby: '+stud[i]);
}else if(typeof stud == 'object'){
    for (const key in stud) {
        console.log(key+' : '+stud[key]);
    }    
}else if(typeof stud == 'function'){
   stud();
}else
   console.log(stud); 
}
// function calculate(x,y,z){
//    function sum(){
//        return x+y+z;
//    }
//    var result  = sum()/3;
//    return result;
// }
// console.log(calculate(30,60,90));
// function calculate(x,y,z){
//     var sum = function (){
//         return x+y+z;
//     }
//     var result  = sum()/3;
//     return result;
//  }
//  console.log(calculate(30,60,90));

// function calculate(x,y,z){
//     // var sum = 
//    // var result  = 
//     return function (){
//         return x+y+z;
//     }()/3;;
//  }
//  console.log(calculate(30,60,90));

// function printData(name,city){
//     var show =function(){
//         console.log(name+" "+city);
//     }
//     return show();
// }
// printData('Priya','Ban');

// function printMyData(name,city){
//     return function(){
//         console.log(name+" "+city);
//     };
// }
// var result = printMyData('Priya','Ban');
// result();



// function printBonus(sal){
//     console.log('Bonus Calculation');
//     var bonus = function(amount){
//         console.log(sal*amount);
//     };
//     return bonus(300);
// }
// printBonus(2000);


function printBonus(sal){
    console.log('Bonus Calculation');
   // var bonus = 
    return function(amount){
        console.log(sal*amount);
    };
}
var bonus = printBonus(2000);
bonus(900);
printBonus(2000)(80)
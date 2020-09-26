var mobile={
name:'',
brand:'',
price:'',
}
var mobile1={
    name:'',
    brand:'',
    price:'',
}

var print=function(){
    console.log('Name'+this.name);
    console.log('Brand'+this.brand);
}
var discountedPrice=function(per)
{
console.log('Discounted price is'this.price*per)
}
var addAccess =function(){
    console.log('Acc'+acc1+", "+acc2);
}
print.call.mobile
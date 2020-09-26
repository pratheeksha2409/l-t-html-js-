function Vehical(name,brand,price){
    this.name=name;
    this.brand=brand;
    this.price=price;
    this.getDiscount=function(per){
       var discount =this.price*per/100;
       this.price=this.price-discount;  
     }
    }
    Vehical.prototype.hasAccessories=true
    Vehical.prototype.showAccessories=function()
    {
        console.log('AC','MusicSystem','Speaker');
    }

var Veh1=new vehical('BMW S7','BMW','4lacks');
console.log(Veh1);
Veh1.getDetails();

var Veh2=new vehical('Audi S5','Audi','5lacks');
console.log(Veh2);
Veh2.getDetails();

var Veh3=new vehical('Aulto','Maruti Susuki','2lacks');
console.log(Veh3);
Veh3.getDetails();



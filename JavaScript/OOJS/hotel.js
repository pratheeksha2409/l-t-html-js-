var hotel={
    name:"rani",
    city:"mysore",
    type:["AC","NonAC"],
    cuisins:["Indian","Chinise","Italic"],
    memu:{
        name:"dosa",
        cost:40,
        category:"breakfast"
    },
    getDetails:function(){
        console.log(hotel);
    }
}
 hotel.rating=4;

 for (const prop in hotel) {
    var hotel1 = hotel[prop]; 
 
  if(hotel1 instanceof Array){
     for (const i in hotel1) 
        console.log(hotel1[i]);
        //console.log('cuisin: '+hotel1[i]);
  }
  else if(typeof hotel1 == 'object'){
      for (const key in hotel1) {
          console.log(key+' : '+hotel1[key]);
      }    
 }else if(typeof hotel1 == 'function'){
    hotel1();
 }
else
     console.log(hotel1); 
  }

function greaterThanY(x, Y){
   var count = 0;
   
   for(var i = 0; i < x.length; i++) {
      
      if(x[i] > Y){
      
         count++;
      
      }
   
   }
    
   return count;
   
}

z = greaterThanY([1,2,3,4,5], 4);
console.log(z);

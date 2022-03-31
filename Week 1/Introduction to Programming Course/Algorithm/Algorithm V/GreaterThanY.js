function GreaterThanY(x, Y){
   var count=0;
   for(var i=0; i<x.length; i++) {
      if(x[i]>Y){
      count++;
   }
   }
    return count;
   }
z = GreaterThanY([1,2,3,4,5], 4);
console.log(z);

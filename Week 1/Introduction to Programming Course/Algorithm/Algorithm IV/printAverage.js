function printAverage(x){
   sum = 0;
   avg = 0;

   for(var i = 0; i < x.length; i++){
      
      sum += x[i];
   }
   
   avg = sum / x.length;
   return avg;

}

y = printAverage([1,2,3]);
console.log(y); // should log 2
  
y = printAverage([2,5,8]);
console.log(y); // should log 5

function returnOddArray(){

   for(var i = 1; i <= 255; i += 2){
   
      console.log(i);

   }

}

y = returnOddArray();
console.log(y); // should log [1,3,5,...,253,255]

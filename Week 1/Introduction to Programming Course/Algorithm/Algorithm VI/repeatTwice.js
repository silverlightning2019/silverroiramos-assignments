function repeatTwice(arr){
  arrnew = [];
  for(i=0; i<arr.length; i++){
        for(j=0; j<2; j++){
            arrnew.push(arr[i]);
        }
  }
  return arrnew;
}
console.log(repeatTwice([4,"Ulysses", 42, false]));

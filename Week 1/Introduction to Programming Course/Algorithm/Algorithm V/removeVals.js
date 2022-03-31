function removeVals(arr, start, end){
  var arrnew=[];
  for (var i=0; i<arr.length; i++){
        if(i<start || i>end){
            arrnew.push(arr[i]);
        }
  }
  return arrnew;
}
console.log(removeVals([20,30,40,50,60,70],2,4);

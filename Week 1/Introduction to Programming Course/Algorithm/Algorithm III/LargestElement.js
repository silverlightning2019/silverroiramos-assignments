function largestElement(arr){
  var max=0;
  for(var i=0; i<arr.length-1; i++){
      if(arr[i]>arr[i+1]){
          var temp = arr[i];
          arr[i] = arr[i+1];
          arr[i+1] = temp;
      }
  }
  max = arr[i];
  return max;
}
console.log( largestElement( [1,30,5,7] ) );

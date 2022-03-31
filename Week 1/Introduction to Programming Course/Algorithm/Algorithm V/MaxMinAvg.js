function MaxMinAvg(arr){
  var arrnew=[];
  var max=0;
  var min=0;
  var sum=0;
  var avg=0;
  for(var i=0; i<arr.length-1; i++){
    if(arr[i]>arr[i+1]){
      var temp = arr[i];
      arr[i] = arr[i+1];
      arr[i+1] = temp;
    }
  }
  max=arr[i];
  arrnew.push(max);
  for (var j=0; j<arr.length-1; j++){
    if (arr[j]<arr[j+1]){
      var temp1 = arr[j];
      arr[j] = arr[j+1];
      arr[j+1] = temp1;
    }
  }
  min=arr[j];
  arrnew.push(min);
  
  for(var k=0; k<arr.length; k++){
    sum+=arr[k];
  }
  avg=sum/arr.length;
  arrnew.push(avg);
  return arrnew;
}
console.log(MaxMinAvg([0, 2, 4]));

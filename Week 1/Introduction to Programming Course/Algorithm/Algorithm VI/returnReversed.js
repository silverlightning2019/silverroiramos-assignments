function returnReversed(arr){
  var partner = 0;
  var num = 1;
  var partner = arr.length / 2;
  
  for(i = 0; i < partner; i++){

    var temp = arr[i];
    arr[i]=arr[arr.length-num];
    arr[arr.length-num]=temp;
    num++;

  }

  return arr;

}

console.log(returnReversed([1,3,5]));

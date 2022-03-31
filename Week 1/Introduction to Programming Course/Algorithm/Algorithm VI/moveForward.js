function moveForward(arr){
      for(i=1; i<arr.length; i++){
          arr[i-1] = arr[i];
    }
    arr.pop();
    arr.push(0);
    return arr;
  }
  console.log(moveForward([1,2,3]));

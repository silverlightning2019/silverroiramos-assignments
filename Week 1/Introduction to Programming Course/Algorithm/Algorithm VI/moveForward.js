function moveForward(arr){
  arr.shift();
  arr.push(0);

  return arr;

}

console.log(moveForward([1,2,3]));

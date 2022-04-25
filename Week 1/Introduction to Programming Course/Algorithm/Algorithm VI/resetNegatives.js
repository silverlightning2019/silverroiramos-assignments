function resetNegatives(arr){

    for(i = 0; i < arr.length; i++){

        if(arr[i] < 0){

            arr[i] = 0;

        }

    }

    return arr;

}

console.log(resetNegatives([1,2,-1, -3]);

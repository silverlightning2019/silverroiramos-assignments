function replaceNegatives(arr){

    for(i = 0; i < arr.length; i++){
        
        if(arr[i] < 0){

            arr[i] = ’Dojo’;

        }

    }

    return arr;
}

console.log(replaceNegatives([1,2,-3,-5,5]));

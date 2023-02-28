function productOfArray(array){
    if (array.length == 0){
        return 1
    }
    else{
        return array[0] * productOfArray(array.slice(1));
    }
}

const result = productOfArray([1,2,3,10])
console.log(result)
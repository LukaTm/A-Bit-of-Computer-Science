function totalIntegers(array) {
	if(array.length === 0) return 0;

    let first = array.shift()
    let num = 0;
    if (Array.isArray(first)){
        num += totalIntegers(first)
    }
    else if (Number.isInteger(first))
        num += 1; 

    return num + totalIntegers(array)

}    

var seven = totalIntegers([[[5], 3], 0, 2, ['foo'], [], [4, [5, 6]]]); // 7
console.log(seven)
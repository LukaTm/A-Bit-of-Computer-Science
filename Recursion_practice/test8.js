let l = [1,2,3]; 
console.log(SumSquares(l)); // 1 + 4 + 9 = 14

l = [[1,2],3]; 
console.log(SumSquares(l)); // 1 + 4 + 9 = 14

l = [[[[[[[[[1]]]]]]]]] 
console.log(SumSquares(l)); // 1 = 1

l = [10,[[10],10],[10]] 
console.log(SumSquares(l)); // 100 + 100 + 100 + 100 = 400

function SumSquares(array) {
    let count = 0;

    for (let x = 0; x < array.length; x++){
        if (Array.isArray(array[x])){
            count += SumSquares(array[x])
        }
        else {
            count += array[x] * array[x]
        }
    }
    return count
}
const mergesort = (array) => {
    if (array.length < 2) return array

    let leftArray = array.slice(0,Math.floor(array.length / 2))
    let rightArray = array.slice(Math.floor(array.length / 2))

                 //
    return Merg(mergesort(leftArray),mergesort(rightArray))
}

const Merg = (leftArray,rightArray) => {
    let sorted = [];
    while (leftArray.length && rightArray.length){
        if (leftArray[0] < rightArray[0]) {
            sorted.push(leftArray.shift())
        }
        else {
            sorted.push(rightArray.shift())
        }
    }
    if (leftArray.length) sorted.push(...leftArray)
    else sorted.push(...rightArray)

    return sorted
}

const haha = mergesort([7,34,6,1,2,54,7,8,9,2])
console.log(haha)
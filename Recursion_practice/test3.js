function all(array,callback){
    if (array.length >= 1){
        if (callback(array[0]) == false) {
            return callback(array[0])
        }
        else{
            return all(array.slice(1),callback)
        }
    }
    else{
        return true
    }
}

let allAreLessThanSeven = all([1,2,9], function(num){
	return num < 7;
});
console.log(allAreLessThanSeven); // false
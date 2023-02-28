let nestedObject = {
    data: {
        something: 'foo2',
        info: {
            stuff: {
                thing: {
                    moreStuff: {
                        magicNumber: 44,
                    }
                }
            }
        }
    }
}

let hasIt = contains(nestedObject, 44); // true
let doesntHaveIt = contains(nestedObject, "foo"); // false
console.log(doesntHaveIt)

function contains(nestedObj,value) {
    for (let items in nestedObj){
        if (typeof nestedObj[items] == 'object'){
            if (contains(nestedObj[items], value)) {
                return true;
            }
        }
        else if (nestedObj[items] == value) {
            return true
        }
    }
    return false
}
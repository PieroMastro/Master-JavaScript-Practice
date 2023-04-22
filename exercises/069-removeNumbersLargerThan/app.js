
function removeNumbersLargerThan(num, obj) {
    for (let prop in obj) {
        if (typeof obj[prop] === 'number' && obj[prop] > num) {
            delete obj[prop];
        }
    }
    return obj;
}


let obj = {
    a: 8,
    b: 2,
    c: 'montana'
}
removeNumbersLargerThan(5, obj);
console.log(obj); // --> { b: 2, c: 'montana' }


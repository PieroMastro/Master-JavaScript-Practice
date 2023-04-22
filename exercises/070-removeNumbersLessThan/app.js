let obj = {
    a: 8,
    b: 2,
    c: 'montana'
}
function removeNumbersLessThan(num, obj) {
    // your code here
    Object.keys(obj).forEach(key => {
        if (typeof obj[key] === 'number' && obj[key] < num) {
            delete obj[key];
        }
    });
    return obj;
};

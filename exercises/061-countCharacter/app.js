function countCharacter(str, char) {
    let count = 0;
    for (let i = 0; i < str.length; i++) {
        if (str[i] === char) {
            count++;
        }
    }
    return count;
}


// function countCharacter(str, char) {
//     return str.split('').reduce((count, currentChar) => {
//         return currentChar === char ? count + 1 : count;
//     }, 0);
// }

// Here's how this version works:

//     The str.split('') method splits the string str into an array of individual characters.
//     The reduce() method applies a function to each element of the array and accumulates a single result.In this case, the function counts the number of occurrences of char by checking if currentChar is equal to char and adding 1 to the count if it is.The initial value of count is 0.
//     The reduce() method returns the final value of count.

// This version eliminates the need for a for loop and uses split() and reduce() instead.

let output = countCharacter('I am a hacker', 'a');
console.log(output); // --> 3
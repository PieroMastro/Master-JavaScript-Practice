
function isEitherEvenOrAreBoth7(num1, num2) {
    return num1 % 2 === 0 || num2 % 2 === 0 ? true :
        num1 === 7 && num2 === 7 ? true :
            false;

}

let output = isEitherEvenOrAreBoth7(3, 7);
console.log(output); // --> false

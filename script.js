
//Basic functions
function add(num1, num2) {
    return num1 + num2;
}

function subtract(num1, num2) {
    return num1 - num2;
}

function multiply(num1, num2) {
    return num1 * num2;
}

function divide(num1, num2) {
    return num1/num2;
}


let input1;
let input2;
let operator;

function operate(num1, num2, op) {
    if (op==="+") {
        return add(num1, num2);
    } else if (op==="-") {
        return subtract (num1, num2);
    } else if (op==="*") {
        return multiply(num1, num2);
    } else if (op==="/") {
        return divide(num1, num2);
    }
}


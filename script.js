
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

/*function operate(num1, num2, op) {
    if (op==="+") {
        return add(num1, num2);
    } else if (op==="-") {
        return subtract (num1, num2);
    } else if (op==="*") {
        return multiply(num1, num2);
    } else if (op==="/") {
        return divide(num1, num2);
    }
}*/

function operate(num1, num2, operator) {
    if (operator=='+') {
        let solution = add (+num1, +num2)
        n1 = solution
    displayContent.textContent = solution
    } else if (operator=="-") {
        let solution = subtract (+num1, +num2)
        n1 = solution
    displayContent.textContent = solution
    } else if (operator=="*") {
        let solution = multiply(+num1, +num2)
        n1 = solution
    displayContent.textContent = solution
    } else if (operator=="/") {
        let solution = divide(+num1, +num2)
        n1 = solution
    displayContent.textContent = solution
    }
    
}

function updateDisplay1(input) {
    displayContent.textContent += input
} 

function updateDisplay2 (input) {
    if (didOp)
    {displayContent.textContent=""
    displayContent.textContent = input
    didOp = false}
    else {
        displayContent.textContent += input
    }
    
}

function clear () {
    displayContent.textContent = ""
    num1 = ""
    num2 = ""
}

let num1 = ""
let num2 = ""
let op
let didOp
let displayContent = document.querySelector('.display')
console.log(displayContent)

let numbers = document.querySelectorAll('.number')
let operators = document.querySelectorAll('.operator')

numbers.forEach((number) => number.addEventListener('click', () => {
    if (num1 == "") {
     updateDisplay1(number.textContent)
     console.log(number.textContent)
     console.log(numbers)
    }
    else {
        updateDisplay2(number.textContent)
    }
}))
operators.forEach((operator) => operator.addEventListener('click', () => {
                                        
                                        if (num1 !== ""){
                                            num2 = +displayContent.textContent
                                        operate(num1, num2, op)
                                        console.log(num2)}
                                        op = operator.textContent
                                        num1 = +displayContent.textContent
                                        didOp = true
                                        console.log(num1)
                                        
                                        }))


document.getElementById('equals').addEventListener('click', () => {
    num2 = +displayContent.textContent
    console.log(`num2 is ${num2}`)
    console.log(`op is ${op}`)
    operate(num1, num2, op)})

document.getElementById('clear').addEventListener('click', clear)

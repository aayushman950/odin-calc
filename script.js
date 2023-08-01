let firstNumber, secondNumber, operator;

function add(a, b) { return a + b; }

function subtract(a, b) { return a - b; }

function multiply(a, b) { return a * b; }

function divide(a, b) { return a / b; }

function operate (operator, firstNumber, secondNumber) {
    switch (operator) {
        case '+':
            return add(firstNumber, secondNumber)
            break;
        case '-':
            return subtract(firstNumber, secondNumber)
            break;
        case '*':
            return multiply(firstNumber, secondNumber)
            break;
        case '/':
            return divide(firstNumber, secondNumber)
            break;
        default:
            console.log('hmmm')
    }
}

console.log(add(3,2))
console.log(subtract(3,2))
console.log(multiply(3,2))
console.log(divide(3,2))

console.log('')

console.log(operate('+',1,2))
console.log(operate('-',1,2))
console.log(operate('*',1,2))
console.log(operate('/',1,2))
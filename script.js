function add(a, b) { return a + b; }

function subtract(a, b) { return a - b; }

function multiply(a, b) { return a * b; }

function divide(a, b) { return a / b; }

function operate (operator, currentValue, secondNumber) {
    switch (operator) {
        case '+':
            return add(prevValue, currentValue)
            break;
        case '-':
            return subtract (currentValue, secondNumber)
            break;
        case '*':
            return multiply (currentValue, secondNumber)
            break;
        case '/':
            return divide (currentValue, secondNumber)
            break;
        default:
            console.log('hmmm')
    }
}

//clear button
const clearBtn = document.getElementById("clear");
clearBtn.addEventListener("click", clear);

function clear() {
    screen.innerHTML = "";
}

// //populate
// function firstDigit() {
//     [...document.querySelectorAll('.hmm')].forEach(function(item) {
//         item.addEventListener('click', function() {
//             displayValue = item.innerHTML;
//             document.getElementById("screenp").innerHTML = `${displayValue}`;
//         });
//     });
// }

// function secondDigit() {
//     console.log(displayValue)
// }

// firstDigit();
// secondDigit();

let currentValue = '';
let prevValue = '';
let numbers = document.querySelectorAll('.hmm')
let screen = document.querySelector('.screen')
numbers.forEach ((number) => number.addEventListener("click", function(e){
    handleNumber(e.target.textContent)
    screen.textContent = currentValue;
}))

function handleNumber(num) {
    if  (currentValue < 100) {
        currentValue += num
    }
}

let operator = '';
let operators = document.querySelectorAll('.op');
operators.forEach((op) => op.addEventListener("click", function(e){
    handleOperator(e.target.textContent)
    screen.textContent = `${prevValue} ${operator}`
}))

function handleOperator(op) {
    operator = op;
    prevValue = currentValue;
    currentValue = '';
}

let equals = document.querySelector('.equals')
equals.addEventListener("click", function(){
    fff();
    screen.textContent = prevValue;
})

function fff(){
    prevValue = Number(prevValue)
    currentValue = Number(currentValue)

    if (operator === "+") {
        prevValue += currentValue;
    } else if (operator === "-") {
        prevValue -= currentValue;
    } else if (operator === "*") {
        prevValue *= currentValue;
    } else {
        prevValue /= currentValue;
    }
}
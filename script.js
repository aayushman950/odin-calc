let displayValue;

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

//clear button
const clearBtn = document.getElementById("clear");
clearBtn.addEventListener("click", clear);

function clear() {
    document.getElementById("screenp").innerHTML = "";
}


// const value = document.getElementsByClassName("hmm")
// if (value) {
//     value.addEventListener("click", clickedNumber);
// }



// function clickedNumber() {
//     for (let i = 0; i <= value.length; i++) {
//         document.getElementById("screenp").innerHTML = value[i].innerHTML;
//     }
// }

// var elem = document.getElementsByClassName('hmm');
// displayValue = elem[i].textContent;
// for(var i = 0; i < elem.length; i++) {
//     elem[i].addEventListener('click', function(){
        
//         document.getElementById("screenp").innerHTML = `${displayValue}`;
//     });
// }

[...document.querySelectorAll('.hmm')].forEach(function(item) {
    item.addEventListener('click', function() {
        document.getElementById("screenp").innerHTML = item.innerHTML;
    });
});

console.log(add(3,2))
console.log(subtract(3,2))
console.log(multiply(3,2))
console.log(divide(3,2))

console.log('')

console.log(operate('+',1,2))
console.log(operate('-',1,2))
console.log(operate('*',1,2))
console.log(operate('/',1,2))
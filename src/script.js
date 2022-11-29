function add(num1, num2) {
    return num1 + num2;
}

function subtract(num1, num2) {
    return num1 - num2;
}

function multiply(num1, num2){
    return num1 * num2;
}

function divide(num1, num2) {
    return num1 / num2;
}

function operate(num1, num2, operation) {
    return operation(num1, num2);
}

function writeNumber(e) {
    screen.textContent += e.target.textContent;
}

const numberButtons = document.querySelectorAll('.num');
const screen = document.querySelector('#screen');

numberButtons.forEach(addEventListener('click', writeNumber));



console.log(operate(5, 8, divide));
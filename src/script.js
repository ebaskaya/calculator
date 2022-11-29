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

function writeText(e) {
    screen.textContent += e.target.textContent;
}

const numberButtons = document.querySelectorAll('.num');
const screen = document.querySelector('#screen');
const clear = document.querySelector('#AC');

clear.addEventListener('click', () => screen.textContent = '');
numberButtons.forEach(button => button.addEventListener('click', writeText));



console.log(operate(5, 8, divide));
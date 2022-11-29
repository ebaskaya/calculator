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
    if(operatorClicked === true){
        screen.textContent = '';
        operatorClicked === false;
    }
    screen.textContent += e.target.textContent;
}

function writeOperator(e){
    if(screen.textContent === ''){
        return;
    }
    operatorClicked = true;
    assignNumbers();
    secondScreen.textContent = e.target.textContent + screen.textContent;
}

function assignNumbers() {
    if(num1 === undefined){
        num1 = screen.textContent;
    }

}

let num1 = undefined;
let num2 = undefined;

let operatorClicked = false;

const numberButtons = document.querySelectorAll('.num');
const operators = document.querySelectorAll('.operator');
const screen = document.querySelector('#main-screen');
const secondScreen = document.querySelector('#second-screen');
const clear = document.querySelector('#AC');

clear.addEventListener('click', () => {
    screen.textContent = '';
    secondScreen.textContent = '';
    num1 = undefined;
    num2 = undefined;
    operatorClicked = false;
});
numberButtons.forEach(button => button.addEventListener('click', writeText));
operators.forEach(button => button.addEventListener('click', writeOperator));






console.log(operate(5, 8, divide));
function add() {
    result = parseFloat(num1) + parseFloat(num2);
    screen.textContent = result;
    num1 = result;
    num2 = undefined;
}

function subtract() {
    screen.textContent = num1 - num2;
    num1 = num1 - num2;
    num2 = undefined;
}

function multiply(){
    screen.textContent = num1 * num2;
    num1 = num1 * num2;
    num2 = undefined;
}

function divide() {
    screen.textContent = num1 / num2;
    num1 = num1 / num2;
    num2 = undefined;
}

function operate(num1, num2, operation) {
    return operation();
}

function writeText(e) {
    if(operatorClicked === true){
        screen.textContent = '';
        operatorClicked = false;
    }
    screen.textContent += e.target.textContent;
}

function writeOperator(e){
    if(operatorClicked === true){
        calculate();
        return;
    }
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
    else {
        num2 = screen.textContent; //num1 is already assigned
    }

}

function printResult(firstNum, secondNum, operator){
    secondScreen.textContent = '=' + firstNum + operator + secondNum;
};

function calculate() {
    assignNumbers();
    if(num1 === undefined || num2 === undefined){
        return
    }
    operator = secondScreen.textContent[0];
    printResult(num1, num2, operator);
    switch(operator){
        case '+':
            add();
            break;
        case '-':
            subtract();
            break;
        case '*':
            multiply();
            break;
        case '/':
            divide();
        
    }
    
}

let num1 = undefined;
let num2 = undefined;

let operatorClicked = false;

const numberButtons = document.querySelectorAll('.num');
const operators = document.querySelectorAll('.operator');
const screen = document.querySelector('#main-screen');
const secondScreen = document.querySelector('#second-screen');
const equals = document.querySelector('#equals');
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
equals.addEventListener('click', calculate);
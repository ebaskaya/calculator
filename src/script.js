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
    screen.textContent += e.target.textContent;
    
}

function calculate(){
    let toEval = screen.textContent;
    numArray = toEval.split(operator);
    num1 = numArray[0];
    num2 = numArray[1];

    chooseOperator(operator);

}

function chooseOperator(operator){
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


function writeOperator(e){
    if(operator === ''){
        operator = e.target.textContent;
    }
    
    screen.textContent += e.target.textContent
}

function assignNumbers() {
   

}

function printResult(firstNum, secondNum, operator){
    secondScreen.textContent = firstNum + operator + secondNum + '=';
};


let num1 = undefined;
let num2 = undefined;


let operator = '';

const numberButtons = document.querySelectorAll('.num');
const operators = document.querySelectorAll('.operator');
const screen = document.querySelector('#screen');

const equals = document.querySelector('#equals');
const clear = document.querySelector('#AC');


secondScreen.textContent = '';
clear.addEventListener('click', () => {
    screen.textContent = '';
    secondScreen.textContent = '';
    num1 = undefined;
    num2 = undefined;
    operatorClicked = false;
    screenInput = false;
});
numberButtons.forEach(button => button.addEventListener('click', writeText));
operators.forEach(button => button.addEventListener('click', writeOperator));
equals.addEventListener('click', calculate);
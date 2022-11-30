function add(num1, num2) {
    result = parseFloat(num1) + parseFloat(num2);
    endOperation(result);
    
}

function subtract(num1, num2) {
    result = num1 - num2;
    endOperation(result);
    
}

function multiply(num1, num2){
    result = num1 * num2;
    endOperation(result);
    
}

function divide(num1, num2) {
    result = num1 / num2;
    endOperation(result);
    
    
}

function endOperation(result) {
    screen.textContent = result;
    operator = '';
}

function operate(num1, num2, operation) {
    return operation();
}

function writeText(e) {
    if(screen.textContent === '0'){
        if(e.target.textContent === '0'){
            return
        }
        screen.textContent = '';
    }
    screen.textContent += e.target.textContent;
    
}

function calculate(){
    let toEval = screen.textContent;
    numArray = toEval.split(operator);
    num1 = numArray[0];
    num2 = numArray[1];
    if(isNaN(num1) || isNaN(num2)){
        return;
    }
    
    chooseOperator(operator, num1, num2);

}

function chooseOperator(operator){
    switch(operator){
        case '+':
            add(num1, num2);
            break;
        case '-':
            subtract(num1, num2);
            break;
        case '*':
            multiply(num1, num2);
            break;
        case '/':
            divide(num1, num2);
    }
}


function writeOperator(e){
    if(isNaN(screen.textContent.slice(-1))){ // If an operator is the last character in the string, return.
        return;
    }
    if(operator === ''){
        operator = e.target.textContent;
    }
    else {
        calculate();
        operator = e.target.textContent;
    }
    
    screen.textContent += e.target.textContent
}

function assignNumbers() {
   

}







let operator = '';

const numberButtons = document.querySelectorAll('.num');
const operators = document.querySelectorAll('.operator');
const screen = document.querySelector('#screen');

screen.textContent = '0';

const equals = document.querySelector('#equals');
const clear = document.querySelector('#AC');



clear.addEventListener('click', () => {
    screen.textContent = '';
    num1 = undefined;
    num2 = undefined;
    operatorClicked = false;
    screenInput = false;
    operator = '';
    screen.textContent = '0';
});
numberButtons.forEach(button => button.addEventListener('click', writeText));
operators.forEach(button => button.addEventListener('click', writeOperator));
equals.addEventListener('click', calculate);
function add(num1, num2) {
    result = num1 + num2;
    endOperation(parseFloat(result.toFixed(2)));
    
}

function subtract(num1, num2) {
    result = num1 - num2;
    endOperation(parseFloat(result.toFixed(2)));
    
}

function multiply(num1, num2){
    result = num1 * num2;
    endOperation(parseFloat(result.toFixed(2)));
    
}

function divide(num1, num2) {
    if(num2 === '0'){
        alert("You can't divide by zero!");
        clear();
        return;
    }
    result = num1 / num2;
    endOperation(parseFloat(result.toFixed(2)));
    
    
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
    num1 = parseFloat(numArray[0]);
    num2 = parseFloat(numArray[1]);
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

function clear() {
    operator = '';
    screen.textContent = '0';
}





let operator = '';

const numberButtons = document.querySelectorAll('.num');
const operators = document.querySelectorAll('.operator');
const screen = document.querySelector('#screen');

screen.textContent = '0';

const equals = document.querySelector('#equals');
const clearButton = document.querySelector('#AC');



clearButton.addEventListener('click', clear);
numberButtons.forEach(button => button.addEventListener('click', writeText));
operators.forEach(button => button.addEventListener('click', writeOperator));
equals.addEventListener('click', calculate);
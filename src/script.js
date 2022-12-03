function add(num1, num2) {
    result = num1 + num2;
    endOperation(parseFloat(result.toFixed(2))); //parseFloat removes unnecessary zeroes.
    
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
    if(num2 === 0){
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
    if(!String(result).includes('.')){
        dotButton.addEventListener('click', putDot);
    }
    else{
        dotButton.removeEventListener('click', putDot);
    }
    
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
    if(e.target.textContent === '0' && screen.textContent.slice(-1) === '0' && operator != '' && 
    !screen.textContent.includes('.')) {
        return;
    }
    screen.textContent += e.target.textContent;
    
}

function calculate(){
    let toEval = screen.textContent;
    let negative = false;
    if(toEval.slice(0,1) === '-' && operator === '-'){ //check if first character is '-' and the operator is '-'
        negative = true;
        toEval = toEval.slice(1);
    } 

    numArray = toEval.split(operator);
    num1 = parseFloat(numArray[0]);
    if(negative === true){
        num1 = -num1;
    }
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

function dotCheck(char){ //Checks to see if it's needed to put an event listener to dot button
    if(char === '.'){
        dotButton.addEventListener('click', putDot);
    }
} 

function putDot(){
    screen.textContent += '.'
    dotButton.removeEventListener('click', putDot);
    
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
    dotButton.addEventListener('click', putDot);
    screen.textContent += e.target.textContent
}

function clear() {
    operator = '';
    screen.textContent = '0';
    dotButton.addEventListener('click', putDot);
}



let operator = '';

const numberButtons = document.querySelectorAll('.num');
const operators = document.querySelectorAll('.operator');
const screen = document.querySelector('#screen');

screen.textContent = '0';

const equals = document.querySelector('#equals');
const clearButton = document.querySelector('#AC');
const deleteButton = document.querySelector('#delete');
const dotButton = document.querySelector('#dot');

dotButton.addEventListener('click', putDot);

clearButton.addEventListener('click', clear);
numberButtons.forEach(button => button.addEventListener('click', writeText));
operators.forEach(button => button.addEventListener('click', writeOperator));
equals.addEventListener('click', calculate);
deleteButton.addEventListener('click', () => {
    if(screen.textContent === '0'){
        return;
    }
    dotCheck(screen.textContent.slice(-1));
    screen.textContent = screen.textContent.slice(0, -1);
    if(screen.textContent === ''){
        screen.textContent = '0';
    }
});

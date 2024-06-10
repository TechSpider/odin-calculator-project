let operandOne = null;
let operandTwo = null;
let operator = null;
let operatorToggle = true;
let equalsButtonClicked = false;

const resultsOutput = document.querySelector(".results");
const clearButton = document.querySelector("#clear-button");
const equalsButton = document.querySelector("#equals-button");
const addButton = document.querySelector("#plus-button");
const subractButton = document.querySelector("#minus-button");
const multiplyButton = document.querySelector("#multiply-button");
const divideButton = document.querySelector("#divide-button");
const oneButton = document.querySelector("#one-button");
const twoButton = document.querySelector("#two-button");
const threeButton = document.querySelector("#three-button");
const fourButton = document.querySelector("#four-button");
const fiveButton = document.querySelector("#five-button");
const sixButton = document.querySelector("#six-button");
const sevenButton = document.querySelector("#seven-button");
const eightButton = document.querySelector("#eight-button");
const nineButton = document.querySelector("#nine-button");
const zeroButton = document.querySelector("#zero-button");


clearButton.addEventListener("click", () => {
    clear()
});
equalsButton.addEventListener("click", () => {
    if ((operandOne !== null) && (equalsButtonClicked === false)) {
        operandTwo = Number(resultsOutput.textContent);
        let newNum = operate(operator, operandOne, operandTwo);
        operandOne = null;
        resultsOutput.textContent = newNum;
        operatorToggle = true;
        operator = null;
    }

    equalsButtonClicked = true;
});
addButton.addEventListener("click", () => {
    if ((operandOne === null) && (operatorToggle === true)) {
        operandOne = Number(resultsOutput.textContent);
        operator = '+';
        operatorToggle = false;
        equalsButtonClicked = false;
    } else if ((operator !== null) && (operatorToggle === true)) {
        operandTwo = Number(resultsOutput.textContent);
        let newNum = operate(operator, operandOne, operandTwo);
        operandOne = newNum;
        resultsOutput.textContent = newNum;
        operator = '+';
        operatorToggle = false;
        equalsButtonClicked = false;
    }
});
subractButton.addEventListener("click", () => {
    if ((operandOne === null) && (operatorToggle === true)) {
        operandOne = Number(resultsOutput.textContent);
        operator = '-';
        operatorToggle = false;
        equalsButtonClicked = false;
    } else if ((operator !== null) && (operatorToggle === true)) {
        operandTwo = Number(resultsOutput.textContent);
        let newNum = operate(operator, operandOne, operandTwo);
        operandOne = newNum;
        resultsOutput.textContent = newNum;
        operator = '-';
        operatorToggle = false;
        equalsButtonClicked = false;
    }
});
multiplyButton.addEventListener("click", () => {
    if ((operandOne === null) && (operatorToggle === true)) {
        operandOne = Number(resultsOutput.textContent);
        operator = '*';
        operatorToggle = false;
        equalsButtonClicked = false;
    } else if ((operator !== null) && (operatorToggle === true)) {
        operandTwo = Number(resultsOutput.textContent);
        let newNum = operate(operator, operandOne, operandTwo);
        operandOne = newNum;
        resultsOutput.textContent = newNum;
        operator = '*';
        operatorToggle = false;
        equalsButtonClicked = false;
    }
});
divideButton.addEventListener("click", () => {
    if ((operandOne === null) && (operatorToggle === true)) {
        operandOne = Number(resultsOutput.textContent);
        operator = '/';
        operatorToggle = false;
        equalsButtonClicked = false;
    } else if ((operator !== null) && (operatorToggle === true)) {
        operandTwo = Number(resultsOutput.textContent);
        let newNum = operate(operator, operandOne, operandTwo);
        operandOne = newNum;
        resultsOutput.textContent = newNum;
        operator = '/';
        operatorToggle = false;
        equalsButtonClicked = false;
    }
});


oneButton.addEventListener("click", () => {
    if (equalsButtonClicked === true) {
        clear();
    }
    if ((resultsOutput.textContent) === '0' || (operatorToggle === false)) {
        resultsOutput.textContent = '1';
        operatorToggle = true;
    } else {
        resultsOutput.textContent += '1'
        operatorToggle = true;
    } 
});
twoButton.addEventListener("click", () => {    
    if (equalsButtonClicked === true) {
        clear();
    }
    if ((resultsOutput.textContent) === '0' || (operatorToggle === false)) {
        resultsOutput.textContent = '2';
        operatorToggle = true;
    } else {
        resultsOutput.textContent += '2';
        operatorToggle = true;
    } 
});
threeButton.addEventListener("click", () => {    
    if (equalsButtonClicked === true) {
        clear();
    }
    if ((resultsOutput.textContent) === '0' || (operatorToggle === false)) {
        resultsOutput.textContent = '3';
        operatorToggle = true;
    } else {
        resultsOutput.textContent += '3';
        operatorToggle = true;
    } 
});
fourButton.addEventListener("click", () => {    
    if (equalsButtonClicked === true) {
        clear();
    }
    if ((resultsOutput.textContent) === '0' || (operatorToggle === false)) {
        resultsOutput.textContent = '4';
        operatorToggle = true;
    } else {
        resultsOutput.textContent += '4';
        operatorToggle = true;
    } 
});
fiveButton.addEventListener("click", () => {    
    if (equalsButtonClicked === true) {
        clear();
    }
    if ((resultsOutput.textContent) === '0' || (operatorToggle === false)) {
        resultsOutput.textContent = '5';
        operatorToggle = true;
    } else {
        resultsOutput.textContent += '5';
        operatorToggle = true;
    } 
});
sixButton.addEventListener("click", () => {    
    if (equalsButtonClicked === true) {
        clear();
    }
    if ((resultsOutput.textContent) === '0' || (operatorToggle === false)) {
        resultsOutput.textContent = '6';
        operatorToggle = true;
    } else {
        resultsOutput.textContent += '6';
        operatorToggle = true;
    } 
});
sevenButton.addEventListener("click", () => {    
    if (equalsButtonClicked === true) {
        clear();
    }
    if ((resultsOutput.textContent) === '0' || (operatorToggle === false)) {
        resultsOutput.textContent = '7';
        operatorToggle = true;
    } else {
        resultsOutput.textContent += '7';
        operatorToggle = true;
    } 
});
eightButton.addEventListener("click", () => {    
    if (equalsButtonClicked === true) {
        clear();
    }
    if ((resultsOutput.textContent) === '0' || (operatorToggle === false)) {
        resultsOutput.textContent = '8';
        operatorToggle = true;
    } else {
        resultsOutput.textContent += '8';
        operatorToggle = true;
    } 
});
nineButton.addEventListener("click", () => {    
    if (equalsButtonClicked === true) {
        clear();
    }
    if ((resultsOutput.textContent) === '0' || (operatorToggle === false)) {
        resultsOutput.textContent = '9';
        operatorToggle = true;
    } else {
        resultsOutput.textContent += '9';
        operatorToggle = true;
    } 
});
zeroButton.addEventListener("click", () => {    
    if (equalsButtonClicked === true) {
        clear();
    }
    if ((resultsOutput.textContent) === '0' || (operatorToggle === false)) {
        resultsOutput.textContent = '0';
        operatorToggle = true;
    } else {
        resultsOutput.textContent += '0';
        operatorToggle = true;
    } 
});


function operate(operator, a, b) {
    if (operator === '+') {
        return add(a, b);
    } else if (operator === '-') {
        return subract(a, b);
    } else if (operator === '*') {
        return multiply(a, b);
    } else if (operator === '/') {
        return divide(a, b);
    }
}

function add(a, b) {
    return a + b;
}

function subract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}

function clear() {
    resultsOutput.textContent = '0';
    operandOne = null;
    operandTwo = null;
    operatorToggle = true;
    equalsButtonClicked = false;
}
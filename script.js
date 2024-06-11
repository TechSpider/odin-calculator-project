let operandOne = null;
let operandTwo = null;
let operator = null;
let operatorToggle = true;
let equalsButtonClicked = false;
let decimalToggle = true;

const resultsOutput = document.querySelector(".results");
const backButton = document.querySelector("#backspace-button");
const signButton = document.querySelector("#sign-button");
const decimalButton = document.querySelector("#period-button");
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


decimalButton.addEventListener("click", () => {
    decimalEvent();
});
signButton.addEventListener("click", () => {
    signEvent();
});
backButton.addEventListener("click", () => {
    backspaceEvent();
});
clearButton.addEventListener("click", () => {
    clear();
});
equalsButton.addEventListener("click", () => {
    equalsEvent();
});
addButton.addEventListener("click", () => {
    addEvent();
});
subractButton.addEventListener("click", () => {
    subractEvent();
});
multiplyButton.addEventListener("click", () => {
    multiplyEvent();
});
divideButton.addEventListener("click", () => {
    divideEvent();
});


window.addEventListener("keydown", (event) => {
    if (event.key === '1') {
        numEvent(1);
    }
    if (event.key === '2') {
        numEvent(2);
    }
    if (event.key === '3') {
        numEvent(3);
    }
    if (event.key === '4') {
        numEvent(4);
    }
    if (event.key === '5') {
        numEvent(5);
    }
    if (event.key === '6') {
        numEvent(6);
    }
    if (event.key === '7') {
        numEvent(7);
    }
    if (event.key === '8') {
        numEvent(8);
    }
    if (event.key === '9') {
        numEvent(9);
    }
    if (event.key === '0') {
        numEvent(0);
    }
    if (event.key === '-') {
        subractEvent();
    }
    if (event.key === '+') {
        addEvent();
    }
    if (event.key === '/') {
        divideEvent();
    }
    if (event.key === '*') {
        multiplyEvent();
    }
    if (event.key === '.') {
        decimalEvent();
    }
    if (event.key === 'Enter') {
        equalsEvent();
    }
    if (event.key === 'Backspace') {
        backspaceEvent();
    }
});


oneButton.addEventListener("click", () => {
    numEvent(1);
});
twoButton.addEventListener("click", () => {    
    numEvent(2); 
});
threeButton.addEventListener("click", () => {    
    numEvent(3); 
});
fourButton.addEventListener("click", () => {    
    numEvent(4); 
});
fiveButton.addEventListener("click", () => {    
    numEvent(5); 
});
sixButton.addEventListener("click", () => {    
    numEvent(6); 
});
sevenButton.addEventListener("click", () => {    
    numEvent(7); 
});
eightButton.addEventListener("click", () => {    
    numEvent(8); 
});
nineButton.addEventListener("click", () => {    
    numEvent(9); 
});
zeroButton.addEventListener("click", () => {    
    numEvent(0); 
});


function operate(operator, a, b) {
    let returnValue = -1;
    if (operator === '+') {
        returnValue = add(a, b);
    } else if (operator === '-') {
        returnValue = subract(a, b);
    } else if (operator === '*') {
        returnValue = multiply(a, b);
    } else if (operator === '/') {
        returnValue = divide(a, b);
    }

    if (Number.isInteger(returnValue)) {
        return returnValue;
    } else {
        return returnValue.toFixed(6);
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

function addEvent() {
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
}

function subractEvent() {
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
}

function multiplyEvent() {
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
}

function divideEvent() {
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
}

function equalsEvent() {
    if ((operandOne !== null) && (equalsButtonClicked === false)) {
        operandTwo = Number(resultsOutput.textContent);
        let newNum = operate(operator, operandOne, operandTwo);
        operandOne = null;
        resultsOutput.textContent = newNum;
        operatorToggle = true;
        operator = null;
    }

    equalsButtonClicked = true;
}

function numEvent(num) {
    if (equalsButtonClicked === true) {
        clear();
    }
    if ((resultsOutput.textContent) === '0' || (operatorToggle === false)) {
        resultsOutput.textContent = String(num);
        operatorToggle = true;
    } else {
        resultsOutput.textContent += String(num);
        operatorToggle = true;
    } 
}

function backspaceEvent() {
    if (resultsOutput.textContent.length > 1) {
        resultsOutput.textContent = resultsOutput.textContent.substring(0, resultsOutput.textContent.length - 1);
    } else {
        resultsOutput.textContent = '0';
    }
}

function signEvent() {
    if (Number(resultsOutput.textContent) > 0) {
        resultsOutput.textContent = '-' + resultsOutput.textContent;
    } else if (Number(resultsOutput.textContent) < 0) {
        resultsOutput.textContent = resultsOutput.textContent.substring(1, resultsOutput.textContent.length);
    }
}

function decimalEvent() {
    if (operatorToggle === true) {
        if (!(resultsOutput.textContent.includes('.'))) {
            resultsOutput.textContent += '.';
        }
    } else {
        resultsOutput.textContent = '0.';
        operatorToggle = true;
    }
}
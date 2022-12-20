const firstDisplayEl = document.querySelector('.first-display');
const secondDisplayEl = document.querySelector('.second-display');
const tempResultEl = document.querySelector('.temp-result');
const numbersEl = document.querySelectorAll('.number');
const operationsEl = document.querySelectorAll('.operation');
const equalEl = document.querySelector('.equal');
const clearAllEl = document.querySelector('.all-clear');
const clearLastEntityEl = document.querySelector('.last-entity-clear');

let displayNumber1 = '';
let displayNumber2 = '';
let result = null;
let lastOperation = '';
let haveDot = false;

numbersEl.forEach(number => {
    number.addEventListener('click', (e) => {
        if(e.target.innerText === '.' && !haveDot) {
            haveDot = true;
        } else if (e.target.innerText === '.' && haveDot) {
            return;
        }
        displayNumber2 += e.target.innerText;
        secondDisplayEl.innerText = displayNumber2;
    });
});

operationsEl.forEach(operation => {
    operation.addEventListener('click', (e) => {
        if (!displayNumber2) result;
        haveDot = false;
        const operationName = e.target.innerText;
        if (displayNumber1 && displayNumber2 && lastOperation) {
            mathOperation();
        } else {
            result = parseFloat(displayNumber2); // here we have passing a sring and making it a number
        }
        clearVar(operationName);
        lastOperation = operationName;
        console.log(result);
    });
});

function clearVar(name = '') {
    displayNumber1 += displayNumber2 + ' ' + name + ' ';
    firstDisplayEl.innerText = displayNumber1;
    secondDisplayEl.innerText = '';
    displayNumber2 = '';
    tempResultEl.innerText = result;
};

function mathOperation() {
    if(lastOperation === 'X') {
        result = parseFloat(result) * parseFloat(displayNumber2);
    } else if (lastOperation === '+') {
        result = parseFloat(result) + parseFloat(displayNumber2);
    } else if (lastOperation === '-') {
        result = parseFloat(result) - parseFloat(displayNumber2);
    } else if (lastOperation === '/') {
        result = parseFloat(result) / parseFloat(displayNumber2);
    } else if (lastOperation === '%') {
        result = parseFloat(result) % parseFloat(displayNumber2);
    }
};

equalEl.addEventListener('click', (e) => {
    if(!displayNumber1 || !displayNumber2) return;  // just returning, no actions forward!
    haveDot = false;
    mathOperation();
    clearVar();
    secondDisplayEl.innerText = result;
    tempResultEl.innerText = '';
    displayNumber2 = result;
    displayNumber1 = '';
});

clearAllEl.addEventListener('click', (e) => {
    firstDisplayEl.innerText = '0';
    secondDisplayEl.innerText = '0';
    displayNumber1 = '';
    displayNumber2 = '';
    result = '';
    tempResultEl.innerText = '0';
});

clearLastEntityEl.addEventListener('click', (e) => {
    secondDisplayEl.innerText = '';
    displayNumber2 = '';
});

window.addEventListener('keydown', (e) => {
    if (
        e.key === '0' ||
        e.key === '1' ||
        e.key === '2' ||
        e.key === '3' ||
        e.key === '4' ||
        e.key === '5' ||
        e.key === '6' ||
        e.key === '7' ||
        e.key === '8' ||
        e.key === '9' ||
        e.key === '.'
    ) {
        clickButtonElement(e.key)
    } else if (
        e.key === '+' ||
        e.key === '-' ||
        e.key === '/' ||
        e.key === '%'
    ) {
        clickOperation(e.key);
    } else if (e.key === '*') {
        clickOperation('X');
    } else if (e.key === 'enter' || e.key === '=') {
        clickEqual()
    }
});

function clickButtonElement(key) {
    numbersEl.forEach( button => {
        if(button.innerText === key) {
            button.click();
        }
    });
};

function clickOperation(key) {
    operationsEl.forEach( button => {
        if (button.innerText === key) {
            button.click();
        }
    });
};

function clickEqual() {
    equalEl.click();
};
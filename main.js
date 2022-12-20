const firstDisplayEl = document.querySelector('.first-display');
const secondDisplayEl = document.querySelector('.second-display');
const tempResultEl = document.querySelector('.temp-result');
const numbersEl = document.querySelectorAll('.number');
const operationsEl = document.querySelectorAll('.operation');
const equalEl = document.querySelector('.equal');
const clearEl = document.querySelector('all-clear');
const lastEntityClearEl = document.querySelector('.last-entity-clear');

let displayNumber1 = '';
let displayNumber2 = '';
let result = '';
let lastOperation = '';
let haveDot = false;


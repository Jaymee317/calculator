const resultLabel = document.getElementById("resultLabel");

const leftBracket = document.getElementById("leftBracket");
const rightBracket = document.getElementById("rightBracket");
const percent = document.getElementById("percent");
const ac = document.getElementById("ac");
const seven = document.getElementById("seven");
const eight = document.getElementById("eight");
const nine = document.getElementById("nine");
const divide = document.getElementById("divide");
const four = document.getElementById("four");
const five = document.getElementById("five");
const six = document.getElementById("six");
const multiply = document.getElementById("multiply");
const one = document.getElementById("one");
const two = document.getElementById("two");
const three = document.getElementById("three");
const minus = document.getElementById("minus");
const zero = document.getElementById("zero");
const dot = document.getElementById("dot");
const equal = document.getElementById("equal");
const add = document.getElementById("add");

let result = 0, num1 = 0, input = '', firsttime = true;
const buttons = document.querySelectorAll('.num');
const operators = document.querySelectorAll('.operator');

ac.onclick = () => {
    result = 0;
    input = '';
    firsttime = true;
    resultLabel.textContent = result;
}


AppendToDisplay = (value) => {
    if (resultLabel.textContent == 0)
        resultLabel.textContent = (value);
    else resultLabel.textContent += (value);
}

buttons.forEach(buttons => {
    buttons.addEventListener('click', () => {
        AppendToDisplay(buttons.value);
    });
});

operators.forEach(operators => {
    operators.addEventListener('click', () => {
        input += (resultLabel.textContent);
        input += operators.value;

        resultLabel.textContent = 0;
    });
});

equal.onclick = () => {
    input += resultLabel.textContent;
    result = eval(input);
    resultLabel.textContent = result;
    input = '';
}
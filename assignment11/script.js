let display = document.getElementById('display');
let currentInput = '0';
let operator = null;
let previousInput = null;
let dotExist = false

function updateDisplay() {
    display.innerHTML = currentInput
}

function clearDisplay() {
    currentInput = '0';
    operator = null;
    previousInput = null;
    dotExist = false
    updateDisplay()
}


function appendNumber(num) {
    if (currentInput === '0') {
        console.log("dotExist -> ", dotExist);
        currentInput = num
    } else {
        if (dotExist == false || num != ".") {
            console.log("dotExist -> ", dotExist);
            currentInput = currentInput + num
            if (num == ".") {
                dotExist = true
            }
        }
    }
    updateDisplay()
}


function appendOperator(op) {
    if (operator !== null) {
        calculateResult();
    }
    operator = op
    previousInput = currentInput
    currentInput = "0"
}


function calculateResult() {
    if (operator) {
        switch (operator) {
            case "+":
                currentInput = parseFloat(previousInput) + parseFloat(currentInput)
                updateDisplay()
                break;
            case "/":
                currentInput = parseFloat(previousInput) / parseFloat(currentInput)
                updateDisplay()
                break;
            case "*":
                currentInput = parseFloat(previousInput) * parseFloat(currentInput)
                updateDisplay()
                break;
            case "-":
                currentInput = parseFloat(previousInput) - parseFloat(currentInput)
                updateDisplay()
                break;
            case "%":
                currentInput = parseFloat(previousInput) % parseFloat(currentInput)
                updateDisplay()
                break;

            default:
                break;
        }
    }
}
let currentInput = '';
let display = document.getElementById('display');

function appendToDisplay(value) {
    currentInput += value;
    display.value = currentInput;
}

function calculateResult() {
    try {
        currentInput = eval(currentInput);
        display.value = currentInput;
    } catch (error) {
        display.value = 'Error';
    }
}

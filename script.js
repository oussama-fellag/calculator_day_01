const display = document.querySelector('.display');

function appendNumber(number) {
    display.value += number;
}

function appendOperator(operator) {
    display.value += operator;
}

function clearDisplay() {
    display.value = '';
}

function calculateResult() {
    try {
        display.value = eval(display.value);
    } catch (error) {
        display.value = 'Error';
    }
}


function adjustDarkness() {
    const darknessValue = document.getElementById('darknessSlider').value;
    document.body.style.backgroundColor = `rgba(0, 0, 0, ${darknessValue / 100})`;
}

// Add a function to toggle dark mode
function toggleMode() {
    document.body.classList.toggle('dark-mode');
    adjustDarkness(); // Adjust darkness when toggling dark mode
}

    function clearDisplay() {
    document.getElementById('display').value = '';
    }
    function appendToDisplay(value) {
    document.getElementById('display').value += value;
    }
    function calculate() {
    
    let displayValue = 
    document.getElementById('display').value;
    let result = eval(displayValue);
    document.getElementById('display').value = result;
    }
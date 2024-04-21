function calculate(operation, num1, num2) {
    switch (operation) {
        case 'add':
            return num1 + num2;
        case 'subtract':
            return num1 - num2;
        case 'multiply':
            return num1 * num2;
        case 'divide':
            if (num2 !== 0) {
                return (num1 / num2).toFixed(2);
            } else {
                return "Error: Cannot divide by zero!";
            }
        default:
            return "Error: Invalid operation";
    }
}

export default calculate
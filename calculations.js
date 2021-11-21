export const calcInput = (input, operator) => {
    input = input.split(operator);
    const cleanedInput = cleanInput(input);
    switch (operator) {
        case "+":
            return plus(cleanedInput);
        case "-":
            return minus(cleanedInput);
        case "*":
            return multiply(cleanedInput);
        case "/":
            return divide(cleanedInput);
    }
}

const cleanInput = (input) => { //handle empty decimals
    return input.map(element => {
       if (element === ".") return element = "0"; 
       return element;
    });
}

const plus = (input) => {
    return (+input[0] + +input[1]).toString();
}

const minus = (input) => {
    return (+input[0] - +input[1]).toString();
}

const multiply = (input) => {
    return (+input[0] * +input[1]).toString();
}

const divide = (input) => {
    let firstNum = input[0];
    let secondNum = input[1];
    if (secondNum === "0" || firstNum === "0") return "0";
    else if (firstNum < 0) { //handle negative divisions
        firstNum *= -1;
        return (-1 * (+firstNum / +secondNum)).toString()
    }
    return (+firstNum / +secondNum).toString();
}
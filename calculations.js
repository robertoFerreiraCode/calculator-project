export const calcInput = (input, operator) => {
    input = input.split(operator);
    switch (operator) {
        case "+":
            return plus(input);
        case "-":
            return minus(input);
        case "*":
            return multiply(input);
        case "/":
            return divide(input);
    }
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
    const firstNum = input[0];
    const secondNum = input[1];
    if (secondNum === "0" || firstNum === "0") return "0";
    else if (firstNum < 0) {
        console.log(firstNum);
        firstNum *= -1;
        console.log(firstNum);
        return (-1 * (+firstNum / +secondNum)).toString()
    }
    return (+firstNum / +secondNum).toString();
}
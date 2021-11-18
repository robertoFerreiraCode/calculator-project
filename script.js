import * as calc from "./calculations.js";
// sort negative values out within calcs

const buttons = document.querySelectorAll(".button");
const screenText = document.querySelector(".screen__text");

const getInput = () => {  
    let currentInput = screenText.textContent.trim();
    return currentInput;
}

const getOperatorList = () => {
    return ["+", "-", "*", "/", "="];
}

const clearInput = () => {
    screenText.textContent = "0";
}

const displayInput = (button, updatedCalculation = 0) => {
    let currentInput;
    if (updatedCalculation === 0) {
        currentInput = getInput();
        (currentInput.length == 1 && currentInput[0] == "0") 
            ? currentInput = button.value 
            : currentInput += button.value;    
    } else {
        console.log("updatedCalculation: ", updatedCalculation);
        currentInput = updatedCalculation;
    }
    screenText.textContent = currentInput;
    console.log("current equation: ", currentInput);
}

// returns true if last char in current input is operator
const lastCharOperator = () => {
    const operatorList = getOperatorList();
    const currentInput = getInput();
    return (operatorList.includes(currentInput.split("")[currentInput.length-1]));
}

// returns the operator within the input
const findOperator = () => {
    const operatorList = getOperatorList();
    const currentInput = getInput();
    return operatorList.find((c) => currentInput.split("").includes(c));
}

// checks if current operation currently contains an operator
const containsOperator = () => {
    const currentInput = getInput();
    const operatorList = getOperatorList();
    return currentInput.split("").some((c) => operatorList.includes(c));
}

// returns true if decimal is valid to place within input
const validDecimal = () => {
    const currentInput = getInput();
    if (currentInput[currentInput.length-1] === ".") { //checks no decimals next to each other
        return false;
    }
    if (containsOperator()) { // checks if operation contains operator 
        const currentInputArr = currentInput.split(findOperator());
        if (currentInputArr[currentInputArr.length-1].includes(".")) { //check last number for containing decimal 
            return false;
        }
    } else if (currentInput.includes(".")) { //if operation doesnt contain operator check for previous decimal in number 
        return false;
    }
    return true;
}
const handleInput = (button) => {
    if (!isNaN(button.value)) {       //runs if input is num
        displayInput(button);
    } 
    else if (button.value === "." && validDecimal()) { //runs if valid decimal
        displayInput(button);
    }
    else if (!lastCharOperator()) {   //runs if operator and not double operator
        
        if (containsOperator()) {     //if input is operator but input already contains operator run calculation
            const updatedCalc = calc.calcInput(getInput(), findOperator());
            console.log("line 82");
            displayInput(button, updatedCalc);
        } 
        switch (button.value) {
            case "=": //handled previously
                break;
            case ".": //handled previously
                break;
            case "clear":
                clearInput();
                break;
            default:
                displayInput(button);
        }
        
    }
}

buttons.forEach((button) => {
    button.addEventListener("click", () => {
        handleInput(button);
    });
});


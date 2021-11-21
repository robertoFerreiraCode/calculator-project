import {calcInput} from "./calculations.js";

const buttons = document.querySelectorAll(".button");
const screenText = document.querySelector(".screen__text");
const operatorList = ["+", "-", "*", "/", "="];

const getInput = () => {  
    const currentInput = screenText.textContent.trim();
    return currentInput;
}

const clearInput = () => {
    screenText.textContent = "0";
}

// output calculation to screen 
const displayInput = (button, updatedCalculation = 0) => {
    let currentInput;
    if (updatedCalculation === 0) {
        currentInput = getInput();
        (currentInput.length == 1 && currentInput[0] == "0") 
            ? currentInput = button.value 
            : currentInput += button.value;    
    } else {
        currentInput = updatedCalculation;
    }
    screenText.textContent = currentInput;
    console.log("current equation test: ", currentInput);
}

// returns true if last char in current input is operator
const lastCharOperator = () => {
    const currentInput = getInput();
    return (operatorList.includes(currentInput.split("")[currentInput.length-1]));
}

// returns all operators within the input including negatives
const findAllOperators = () => {
    const currentInput = getInput();
    let currentOperators = currentInput.split("").filter(c => operatorList.includes(c));
    return currentOperators;
}

// returns the operator within the input for calculation
const findOperator = () => {
    let currentOperators = findAllOperators();
    if (currentOperators.length > 1) return currentOperators[1].toString(); //handles negative values
    else return currentOperators.toString();
}

// checks if current operation currently contains an operator
const containsOperator = () => {
    const currentInput = getInput();
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
    const input = getInput();
    if (!isNaN(button.value)) {       //runs if input is num
        displayInput(button);
    } 
    else if (button.value === "." && validDecimal()) { 
        displayInput(button);
    }
    else if (button.value === "clear") { 
        clearInput();
    }
    else if (!lastCharOperator()) {   //runs if operator and not two next to each other
        if (containsOperator()) {     //if input is operator but input already contains operator run calculation
            const updatedCalc = calcInput(input, findOperator());
            if (updatedCalc === getInput()) {
                displayInput(button);
                return;
            }
            if (input.charAt(0) === "-" && findAllOperators().length === 1 && button.value !== "=") { //handle negative
                displayInput(button, updatedCalc); //calc neg number then display operator after
                displayInput(button);
            } else {
                displayInput(button, updatedCalc);
            }
        } else if (button.value === "=") {   //handling single num then equaling 
            return;
        } 
        else {    //handles negative for first input 
            displayInput(button);
        }
    }
}

buttons.forEach((button) => {
    button.addEventListener("click", () => {
        handleInput(button);
    });
});


const screen = document.querySelector(".screen");
const buttons = document.querySelectorAll(".button");

const buttonClick = (button) => {
    console.log(button.value);
}

buttons.forEach((button) => {
    button.addEventListener("click", () => {
        buttonClick(button);
    });
});


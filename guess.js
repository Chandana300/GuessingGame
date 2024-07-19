let gameResult = document.getElementById("gameResult");
let userInput = document.getElementById("userInput");
let randomNum = Math.ceil(Math.random() * 100);
console.log(randomNum)
function checkGuess() {
    let guessNumber = parseInt(userInput.value);
    if (isNaN(guessNumber)) {
        gameResult.textContent = "Provide a valid user input.";
        gameResult.style.backgroundColor = "#1e217c";
    } else if (randomNum > guessNumber) {
        gameResult.textContent = "Too Low! Try again";
        gameResult.style.backgroundColor = "orange";
    } else if (randomNum < guessNumber) {
        gameResult.textContent = "Too High! Try again";
        gameResult.style.backgroundColor = "yellow";
    } else if (randomNum === guessNumber) {
        gameResult.textContent = "Congratulations! You got it.";
        gameResult.style.backgroundColor = "green";
    }
}

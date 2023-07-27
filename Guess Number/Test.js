 // Generate a random number between 1 and 100
 const targetNumber = Math.floor(Math.random() * 100) + 1;

 let attempts = 0;

 function checkGuess() {
   const guess = parseInt(document.getElementById("guess").value);

   if (isNaN(guess)) {
     document.getElementById("message").textContent = "Please enter a valid number.";
     return;
   }

   attempts++;

      if (guess === targetNumber) {
        document.getElementById("message").textContent = `Congratulations! You guessed the number ${targetNumber} in ${attempts} attempts.`;
      } else if (guess < targetNumber) {
        document.getElementById("message").textContent = "Too low! Try again.";
      } else {
        document.getElementById("message").textContent = "Too high! Try again.";
      }
    }

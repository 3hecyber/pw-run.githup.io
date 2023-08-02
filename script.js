document.addEventListener("DOMContentLoaded", function() {
  const passwordInput = document.getElementById("passwordInput");
  const submitButton = document.getElementById("submitButton");
  const codeDigits = document.querySelectorAll(".code-digit");

  const correctPassword = "your_password_here"; // Replace this with your desired password

  submitButton.addEventListener("click", function() {
      const enteredPassword = passwordInput.value;
      if (enteredPassword === correctPassword) {
          // Display code input section if the password is correct
          document.querySelector(".code-section").style.display = "block";
          // Add some animation or effects here if you like
      } else {
          alert("Incorrect password. Please try again.");
      }
  });

  // Additional code to handle the code digits input and any further interactions
  // You can add event listeners and validation logic here as needed.
});

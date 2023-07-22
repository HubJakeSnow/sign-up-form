function checkPasswords() {
    // Get the values of the password fields
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirm-password").value;

    // Get the error message element
    let errorMessage = document.getElementById("error-message");

    // Check if both passwords match
    if (password === confirmPassword) {
        // Passwords match, clear the error message (if exists) and reload the page
        if (errorMessage) {
            errorMessage.remove();
        }
        console.log("Passwords match!");
        window.location.reload();
    } else {
        // Passwords do not match, show the error message
        if (!errorMessage) {
            errorMessage = document.createElement("p");
            errorMessage.id = "error-message";
            errorMessage.style.color = "red";
            errorMessage.textContent = "Passwords do not match!";
            document.querySelector(".form").appendChild(errorMessage);
        }
    }
}

document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    // Dummy authentication
    if (username === "admin" && password === "password") {
        // Redirect to a success page or perform any other actions
        alert("Login successful!");
    } else {
        document.getElementById("message").textContent = "Invalid username or password";
    }
});

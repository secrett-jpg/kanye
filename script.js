
// Get the registration form
document.getElementById("registrationForm")
.addEventListener("submit", function(event) {

    // Prevent page from refreshing
    event.preventDefault();

    // Get the values from the inputs
    let name = document.getElementById("fullname").value;
    let email = document.getElementById("email").value;
    let studentid = document.getElementById("studentid").value;
    let course = document.getElementById("course").value;

    // Show registration message
    let message = document.getElementById("message");

    message.innerHTML =
        "Registration Successful!<br>" +
        "Welcome, " + name + "!<br>" +
        "Email: " + email + "<br>" +
        "Student ID: " + studentid + "<br>" +
        "Course: " + course;

    message.style.color = "green";

    // Clear the form
    document.getElementById("registrationForm").reset();

});

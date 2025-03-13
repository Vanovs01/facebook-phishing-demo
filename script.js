document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const email = document.getElementsByName('email')[0].value;
    const password = document.getElementsByName('password')[0].value;

    // JavaScript Error Handling (Form Validation)
    if (!email || !password) {
        alert("Please enter your email address and password.");
        return; // Stop further execution
    }

    console.log("Email: " + email + ", Password: " + password);

    // Fake Error Message (Simulating Incorrect Login)
    if (password.length < 8) { //Example error condition
        alert("The password you’ve entered is incorrect. Forgotten password?");
    }
    else {
        alert("Credentials captured!\nEmail: " + email + "\nPassword: " + password); //Successful capture.
    }
});

document.addEventListener('keydown', function(e) {
    console.log('Key pressed: ' + e.key);
});

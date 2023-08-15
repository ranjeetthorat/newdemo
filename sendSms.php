<?php


function sendAlertSms($text, $phone)
{
    // Hardcoded parameters
    $user = "ABHIJEET0704";
    $pass = "SJeet@0704";
    $sender = "CBROZZ";

    // Dynamic parameters
    $phone = $phone; // Replace with your dynamic value
    $text = $text; // Replace with your dynamic value
    $priority = "ndnd"; // Replace with your dynamic value
    $stype = "normal"; // Replace with your dynamic value

    // Build the query string
    $queryParams = [
        'user' => $user,
        'pass' => $pass,
        'sender' => $sender,
        'phone' => $phone,
        'text' => $text,
        'priority' => $priority,
        'stype' => $stype,
    ];

    $queryString = http_build_query($queryParams);

    // Final URL
    $url = "http://sms.iotsystem.in/api/sendmsg.php?" . $queryString;

    // Initialize cURL session
    $ch = curl_init();

    // Set cURL options
    curl_setopt($ch, CURLOPT_URL, $url);
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);

    // Execute cURL session and capture the response
    $response = curl_exec($ch);

    // Check for cURL errors
    if (curl_errno($ch)) {
        echo "cURL Error: " . curl_error($ch);
    }

    // Close cURL session
    curl_close($ch);

    // Process the response
    echo $response;
}
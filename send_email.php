<?php

// Error handling and input validation
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405); // Method Not Allowed
    exit('Registration form can only be submitted using a POST request.');
}

$username = filter_var(trim($_POST['username']), FILTER_SANITIZE_STRING);
$email = filter_var(trim($_POST['email']), FILTER_SANITIZE_EMAIL);
$password = password_hash(trim($_POST['password']), PASSWORD_DEFAULT); // Secure password hashing

// Additional validation (optional)
// - Check for empty fields
// - Check for username length or special character restrictions
// - Check email format validity

// Database connection (replace with your credentials)
$servername = "your_server_name";
$database = "your_database_name";
$username = "your_database_username";
$password = "your_database_password";

$conn = new mysqli($servername, $username, $password, $database);

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Check for existing email (optional)
$sql = "SELECT email FROM users WHERE email = ?";
$stmt = $conn->prepare($sql);
$stmt->bind_param('s', $email);
$stmt->execute();
$result = $stmt->get_result();

if ($result->num_rows > 0) {
    echo "Error: Email already exists.";
    $conn->close();
    exit();
}

$stmt->close();

// Insert user into database
$sql = "INSERT INTO users (username, email, password) VALUES (?, ?, ?)";
$stmt = $conn->prepare($sql);
$stmt->bind_param('sss', $username, $email, $password);

if ($stmt->execute()) {
    $userId = $conn->insert_id;

    // Generate a secure verification token (optional, for email verification)
    // $token = base64_encode(random_bytes(32));

    // Email content (modify as needed)
    $subject = "Welcome to Your Account!";
    $message = "Hi " . $username . ",\n\nThank you for registering on our website!\n\n";

    // Add a verification link if using email verification
    // $message .= "Please click on the following link to verify your account:\n";
    // $message .= "https://yourwebsite.com/domains//verify.php?token=" . $token . "&userId=" . $userId . "\n\n";

    $message .= "You can now log in using your username and password.\n\n";
    $message .= "Sincerely,\nThe [Your Website Name] Team";

    // Email headers
    $headers = "From: noreply@" . $_SERVER['SERVER_NAME'] . "\r\n";
    $headers .= "Reply-To: " . $_SERVER['SERVER_NAME'] . "\r\n";
    $headers .= "Content-Type: text/plain; charset=UTF-8\r\n";

    // Send email using a reliable method (replace with your preferred method)
    if (mail($email, $subject, $message, $headers)) {
        echo "Registration successful! A confirmation email has been sent to your address.";
    } else {
        echo "Registration successful, but email could not be sent. Please contact the administrator.";
    }
} else {
    echo "Error: Registration failed.";
}

$conn->close();

?>

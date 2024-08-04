<?php
$servername = "localhost";
$username = "username";
$password = "password";
$dbname = "myDB";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

if (isset($_POST['save'])) {
    // Save action
    $stmt = $conn->prepare("INSERT INTO users (firstname, lastname, sex, age, address, datetime, phonenumber) VALUES (?, ?, ?, ?, ?, ?, ?)");
    $stmt->bind_param("sssisss", $firstname, $lastname, $sex, $age, $address, $datetime, $phonenumber);
} elseif (isset($_POST['update'])) {
    // Update action
    $stmt = $conn->prepare("UPDATE users SET firstname=?, lastname=?, sex=?, age=?, address=?, datetime=?, phonenumber=? WHERE id=?");
    $stmt->bind_param("sssisssi", $firstname, $lastname, $sex, $age, $address, $datetime, $phonenumber, $id);
    $id = $_POST['id'];
} elseif (isset($_POST['delete'])) {
    // Delete action
    $stmt = $conn->prepare("DELETE FROM users WHERE id=?");
    $stmt->bind_param("i", $id);
    $id = $_POST['id'];
}

// Set parameters
$firstname = $_POST['firstname'];
$lastname = $_POST['lastname'];
$sex = $_POST['sex'];
$age = $_POST['age'];
$address = $_POST['address'];
$datetime = $_POST['datetime'];
$phonenumber = $_POST['phonenumber'];

// Execute SQL query
if ($stmt->execute()) {
    echo "Action completed successfully";
} else {
    echo "Error: " . $stmt->error;
}

// Close connection
$stmt->close();
$conn->close();
?>

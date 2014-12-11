<?php
$servername = 'localhost';
$username = 'yeyoungcho';
$password = 'yy22783486';
$dbname = 'yeyoungcho';

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
} 

$value1 = $_POST['firstname'];
$value2 = $_POST['email'];


$sql = "INSERT INTO insta_sub(firstname, email) VALUES (DEFAULT, '$value1', '$value2')";

// if ($conn->query($sql) === TRUE) {
//     echo "New record created successfully";
// } else {
//     echo "Error: " . $sql . "<br>" . $conn->error;
// }

// $conn->close();

if ($conn->query($sql) === TRUE) {
    //echo "when you submit this should REDIRECT";
    header('Location: home.html'); 
} else {
    echo "Error: " . $sql . "<br>" . $conn->error;
}

$conn->close();

?>
<?php
include('conn.php');
 ?>
<?php

// sql to create table
$sql = "CREATE TABLE MyGuests (
    id INT(6) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    firstname VARCHAR(30) NOT NULL,
    lastname VARCHAR(30) NOT NULL,
    email VARCHAR(50),
    reg_date TIMESTAMP
    )";
    
    if ($conn->query($sql) === TRUE) {
        echo "Table MyGuests created successfully";
    } else {
        echo "Error creating table: " . $conn->error;
    }
    echo "        ";
    echo "in " , $dbname;
    $conn->close();
    ?>
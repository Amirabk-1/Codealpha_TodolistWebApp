<?php
include 'connect.php'; 

error_reporting(E_ALL);
ini_set('display_errors', 1);


//if ($_SERVER["REQUEST_METHOD"] === "POST") {
  
    if (isset($_POST['taskNameInput'])) {    
        
        $taskName = $_POST['taskNameInput'];

        
        $sql = "INSERT INTO tasklist (task_name, task_status) VALUES ('$taskName', 0)";
        $result = mysqli_query($conn, $sql);

         
         if ($result) {
            echo "Task added successfully.";
        } else {
            
            echo "Error: " . mysqli_error($conn);
        }

        
        mysqli_close($conn);
        

            
      
    } else {
        echo "Error: Task name parameter is missing.";
    }

?>


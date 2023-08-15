<?php 
    include 'check_con.php';

    $srno = $_GET['id'];


    try{

        $sql = "DELETE FROM device_info WHERE srno = ".$srno;

        if (mysqli_query($conn,$sql))
        {    
           
            header('location:formData.php');
        }
        else 
        {
                echo "Error: " . $sql . "<br>" . mysqli_error($conn);
        }

    }
    catch (customException $e) {
        echo $e->errorMessage();
    }


    
?>
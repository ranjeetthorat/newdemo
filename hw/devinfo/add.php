<?php 
    include 'check_con.php';

    $intervals = $_POST['intervals'];
    $min_temp = $_POST['min_temp'];
    $max_temp = $_POST['max_temp'];
    $min_humidity = $_POST['min_humidity'];
    $max_humidity = $_POST['max_humidity'];
    $ffid = $_POST['ffid'];
    $password = $_POST['password'];
    $device_id = $_POST['device_id'];
    $dept_id = $_POST['dept_id'];
    $server_ip = $_POST['server_ip'];
    $static_ip = $_POST['static_ip'];
    $gateway = $_POST['gateway'];
    $subnet_mask = $_POST['subnet_mask'];
    $primary_dns = $_POST['primary_dns'];
    $secondary_dns = $_POST['secondary_dns'];
    $temp_cal = $_POST['temp_cal'];
    $humidity_cal = $_POST['humidity_cal'];

                                
        $sql = "INSERT INTO device_info(`intervals`,`min_temp`,`max_temp`,`min_humidity`, `max_humidity`, `ffid`, `password`,`device_id`,`dept_id`,`server_ip`, `static_ip`, `gateway`,`subnet_mask`,`primary_dns`,`secondary_dns`, `temp_cal`, `humidity_cal`) VALUES ('$intervals','$min_temp','$max_temp','$min_humidity','$max_humidity','$ffid','$password','$device_id','$dept_id','$server_ip','$static_ip','$gateway','$subnet_mask','$primary_dns','$secondary_dns','$temp_cal','$humidity_cal')";

        if (mysqli_query($conn,$sql))
        {    
                // echo "The file ". htmlspecialchars( basename( $_FILES["fileToUpload"]["name"])). " has been uploaded.";
            ?>
                    <html> <script> alert('Product added Successfully!!!'); </script></html>
            <?php
            header('location:formData.php');
        }
        else 
        {
                echo "Error: " . $sql . "<br>" . mysqli_error($conn);
        }
       
    
?>
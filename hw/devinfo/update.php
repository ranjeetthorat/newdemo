<?php 
    include 'check_con.php';

    $srno = $_POST['srno'];
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
                                
        $sql = "UPDATE device_info SET intervals = '$intervals', min_temp = '$min_temp', max_temp = '$max_temp', min_humidity = '$min_humidity', max_humidity = '$max_humidity', ffid = '$ffid',  password = '$password',  device_id = '$device_id', dept_id = '$dept_id', server_ip = '$server_ip', static_ip = '$static_ip', gateway = '$gateway', subnet_mask = '$subnet_mask', primary_dns = '$primary_dns', secondary_dns = '$secondary_dns', temp_cal = '$temp_cal',  humidity_cal='$humidity_cal' WHERE srno = ".$srno ;

        if (mysqli_query($conn,$sql))
        {    
                // echo "The file ". htmlspecialchars( basename( $_FILES["fileToUpload"]["name"])). " has been uploaded.";
            ?>
                    <html> <script> alert('Product Updated Successfully!!!'); </script></html>
            <?php
            header('location:formData.php');
        }
        else 
        {
                echo "Error: " . $sql . "<br>" . mysqli_error($conn);
        }
       
    
?>
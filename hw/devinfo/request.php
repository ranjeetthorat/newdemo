<?php 

include 'check_con.php';

  
  $sql = "SELECT * FROM device_info WHERE device_id='".$_GET['device_id']."'AND dept_id='".$_GET['dept_id']."'" ;

  $result = mysqli_query($conn,$sql);

  
  if (!empty($result) && $result->num_rows > 0) {
    while ($row = $result->fetch_assoc()) {

      //$srno   = $row['srno'];    
      $intervals   = $row['intervals'];    
      $min_temp   = $row['min_temp'];
      $max_temp   = $row['max_temp'];
      $min_humidity   = $row['min_humidity'];
      $max_humidity   = $row['max_humidity'];
      $ffid   = $row['ffid'];
      $password   = $row['password'];
      $device_id   = $row['device_id'];
      $dept_id   = $row['dept_id'];
      $server_ip   = $row['server_ip'];
      $static_ip   = $row['static_ip'];
      $gateway   = $row['gateway'];
      $subnet_mask   = $row['subnet_mask'];     
      $primary_dns   = $row['primary_dns'];
      $secondary_dns   = $row['secondary_dns'];
      $temp_cal   = $row['temp_cal'];
      $humidity_cal   = $row['humidity_cal'];

        echo $intervals.",".$min_temp.",".$max_temp.",".$min_humidity.",".$max_humidity.",".$ffid.",".$password.",".$device_id.",".$dept_id.",".$server_ip.",".$static_ip.",".$gateway.",".$subnet_mask.",".$primary_dns.",".$secondary_dns.",".$temp_cal.",".$humidity_cal ; 

    }

}


?>
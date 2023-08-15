<?php 

include 'check_con.php';

  
  $sql = "SELECT * FROM device_info " ;

  $result = mysqli_query($conn,$sql);

?>

<!doctype html>
<html lang="en">
  <head>
    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <!-- Bootstrap CSS -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-+0n0xVW2eSR5OomGNYDnhzAbDsOXxcvSN1TPprVMTNDbiYZCxYbOOl7+AMvyTG2x" crossorigin="anonymous">

    <title></title>
    <style>
  

    </style>
  </head>
  <body>

    <div class="container-fluid">

        <table class="table table-bordered mt-5" >
          <thead>
            <tr>
              <th scope="col" > Sr. No. </th>
              <th scope="col" > intervals</th>
              <th scope="col" > min_temp</th>
              <th scope="col" > max_temp</th>
              <th scope="col" > min_humidity</th>
              <th scope="col" > max_humidity</th>    
              <th scope="col" > ffid</th>
              <th scope="col" > password </th>
              <th scope="col" > device_id </th>
              <th scope="col" > dept_id </th>
              <th scope="col" > server_ip </th>
              <th scope="col" > static_ip </th>
              <th scope="col" > gateway </th>
              <th scope="col" > subnet_mask </th>
              <th scope="col" > primary_dns </th>
              <th scope="col" > secondary_dns </th>
              <th scope="col" > temp_cal </th>
              <th scope="col" > humidity_cal </th>
              <th scope="col" > Update </th>
              <th scope="col" > Delete </th>
        
            </tr>
          </thead>
          <tbody>
              <?php 

                  if ($result->num_rows > 0) {
                  while ($row = $result->fetch_assoc()) {

                    $srno   = $row['srno'];    
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

            ?>

                    <tr>
                          <th scope="row"><?php echo $srno; ?> <input type="hidden" name="srno" value="<?php echo $srno; ?>" > </th>
                                    
                          <td class=""> <?php echo $intervals ; ?>
                          <td class=""> <?php echo $min_temp ; ?>
                          <td class=""> <?php echo $max_temp ; ?>
                          <td class=""> <?php echo $min_humidity ; ?>
                          <td class=""> <?php echo $max_humidity ; ?>
                          <td class=""> <?php echo $ffid ; ?>
                          <td class=""> <?php echo $password ; ?>
                          <td class=""> <?php echo $device_id ; ?> 
                          <td class=""> <?php echo $dept_id ; ?>
                          <td class=""> <?php echo $server_ip ; ?> 
                          <td class=""> <?php echo $static_ip ; ?> 
                          <td class=""> <?php echo $gateway ; ?>
                          <td class=""> <?php echo $subnet_mask ; ?>
                          <td class=""> <?php echo $primary_dns ; ?>
                          <td class=""> <?php echo $secondary_dns ; ?>
                          <td class=""> <?php echo $temp_cal ; ?>
                          <td class=""> <?php echo $humidity_cal ; ?>
                          <td class=""> <input type="button" class="btn btn-primary" value="Update" onclick="window.location='formUpdate.php?id=<?php echo $srno; ?>' "> </td>
                          <td class=""> <input type="button" class="btn btn-outline-danger" value="Delete" onclick="window.location='delete.php?id=<?php echo $srno; ?> ' "> </td>
                    </tr>
                  <?php

                      }
                    }

                      ?>

          </tbody>
        </table>

    </div>
    <!-- Option 1: Bootstrap Bundle with Popper -->
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/js/bootstrap.bundle.min.js" integrity="sha384-gtEjrD/SeCtmISkJkNUaaKMoLD0//ElJ19smozuHV6z3Iehds+3Ulb9Bn9Plx0x4" crossorigin="anonymous"></script>
    <!-- Option 2: Separate Popper and Bootstrap JS -->
    <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.9.2/dist/umd/popper.min.js" integrity="sha384-IQsoLXl5PILFhosVNubq5LC7Qb9DXgDA9i+tQ8Zj3iwWAwPtgFTxbJ8NT4GN1R8p" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/js/bootstrap.min.js" integrity="sha384-Atwg2Pkwv9vp0ygtn1JAojH0nYbwNJLPhwyoVbhoPwBhjQPR5VtM2+xf0Uwh9KtT" crossorigin="anonymous"></script>
   
  </body>
</html>
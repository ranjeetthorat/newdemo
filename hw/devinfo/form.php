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
    body{
      background:#666666;
    }
      form{
        box-shadow:5px 5px 10px rgba(0,0,0,.7);
      }
      .form-group{
        margin-top:10px;
      }
    </style>
  </head>
  <body>

  <div class="container">
      <form class="col-md-6 offset-md-3 bg-light p-5 mt-5 mb-5 rounded" method="POST" action="add.php">
          
          <h1 class="text-center mt-3">Form Title</h1>
          
            <hr>
          
          <div class="form-group">
            <label for="intervals">Interval</label>
            <input type="text" class="form-control" id="intervals" name="intervals" aria-describedby="emailHelp" placeholder="Enter Interval">
          </div>
          <div class="form-group">
            <label for="min_temp">Minimum Temperature</label>
            <input type="text" class="form-control" id="min_temp" name="min_temp" placeholder="Enter Minimum Temperature">
          </div>
          <div class="form-group">
            <label for="max_temp"> Maximum Temperature </label>
            <input type="text" class="form-control" id="max_temp" name="max_temp" placeholder="Enter Maximum Temperature">
          </div>

          <div class="form-group">
            <label for="min_humidity"> Minimum Humidity </label>
            <input type="text" class="form-control" id="min_humidity" name="min_humidity" placeholder="Enter Minimum Humidity">
          </div>

          <div class="form-group">
            <label for="max_humidity"> Maximum Humidity </label>
            <input type="text" class="form-control" id="max_humidity" name="max_humidity" placeholder="Enter Maximum Humidity">
          </div>

          <div class="form-group">
            <label for="ffid"> FFID </label>
            <input type="text" class="form-control" id="ffid" name="ffid" placeholder="Enter FFID">
          </div>

          <div class="form-group">
            <label for="password"> Password </label>
            <input type="Password" class="form-control" id="password" name="password" placeholder="Enter Password">
          </div>

          <div class="form-group">
            <label for="device_id"> Device Id. </label>
            <input type="text" class="form-control" id="device_id" name="device_id" placeholder="Enter Device Id.">
          </div>

          <div class="form-group">
            <label for="dept_id"> Department Id. </label>
            <input type="text" class="form-control" id="dept_id" name="dept_id" placeholder="Enter Department Id.">
          </div>

          <div class="form-group">
            <label for="server_ip"> Server IP. </label>
            <input type="text" class="form-control" id="server_ip" name="server_ip" placeholder="Enter Server IP">
          </div>

          <div class="form-group">
            <label for="static_ip"> Static IP </label>
            <input type="text" class="form-control" id="static_ip" name="static_ip" placeholder="Enter Static IP">
          </div>

          <div class="form-group">
            <label for="gateway"> Gateway </label>
            <input type="text" class="form-control" id="gateway" name="gateway" placeholder="Enter Gateway">
          </div>

          <div class="form-group">
            <label for="subnet_mask"> Subnetmask </label>
            <input type="text" class="form-control" id="subnet_mask" name="subnet_mask" placeholder="Enter Subnetmask">
          </div>

          <div class="form-group">
            <label for="primary_dns"> Primary DNS  </label>
            <input type="text" class="form-control" id="primary_dns" name="primary_dns" placeholder="Enter Primary DNS">
          </div>

          <div class="form-group">
            <label for="secondary_dns"> Secondary DNS </label>
            <input type="text" class="form-control" id="secondary_dns" name="secondary_dns" placeholder="Enter Secondary DNS">
          </div>

          <div class="form-group">
            <label for="temp_cal"> Temperature Calibration </label>
            <input type="text" class="form-control" id="temp_cal" name="temp_cal" placeholder="Enter Temperature Calibration">
          </div>

          <div class="form-group">
            <label for="humidity_cal"> Humidity Calibration </label>
            <input type="text" class="form-control" id="humidity_cal" name="humidity_cal" placeholder="Enter Humidity Calibration">
          </div>



          <button type="submit" class="btn btn-primary mt-5 col-12">Submit</button>
      </form>
  </div>

    <!-- Option 1: Bootstrap Bundle with Popper -->
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/js/bootstrap.bundle.min.js" integrity="sha384-gtEjrD/SeCtmISkJkNUaaKMoLD0//ElJ19smozuHV6z3Iehds+3Ulb9Bn9Plx0x4" crossorigin="anonymous"></script>
    <!-- Option 2: Separate Popper and Bootstrap JS -->
    <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.9.2/dist/umd/popper.min.js" integrity="sha384-IQsoLXl5PILFhosVNubq5LC7Qb9DXgDA9i+tQ8Zj3iwWAwPtgFTxbJ8NT4GN1R8p" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/js/bootstrap.min.js" integrity="sha384-Atwg2Pkwv9vp0ygtn1JAojH0nYbwNJLPhwyoVbhoPwBhjQPR5VtM2+xf0Uwh9KtT" crossorigin="anonymous"></script>
   
  </body>
</html>
<?php
include('dbfile.php');

$z = 0;
$finalParameterName = array();
$finalvalue = array();
$query = "SELECT distinct (uid),name,deptname from device";

$devices = mysqli_query($connection, $query);

if (mysqli_num_rows($devices)) {

    while ($row = mysqli_fetch_assoc($devices)) {

        $deviceName[$z] = $row['name'];
        $deviceId[$z] = $row['uid'];
        $depart[$z] = $row['deptname'];
        $z++;
    }
} else {
    exit("no data");
}
$colorsarray =array('#C70039','#8E44AD','#088812','#888208','#020725','#25B6C2','#D83FD8');



?>
<?php
include('dbfile.php');

$z = 0;
$finalParameterName = array();
$finalvalue = array();
$deptids = $_SESSION['udeptid'];
$query = "SELECT distinct (uid),name,deptname from device where deptid ='$deptids'";

$devices = mysqli_query($connection, $query);

if (mysqli_num_rows($devices)) {

    while ($row = mysqli_fetch_assoc($devices)) {

        $deviceName[$z] = $row['name'];
        $deviceId[$z] = $row['uid'];
        $depart[$z] = $row['deptname'];
        $z++;
    }
} else {
    // echo "Database error there are no device to show for this department";
    $deviceName[0]='no device in this department';
    $deviceId[0]='empty';
    $depart[0]='no device in this department';
}
$colorsarray =array('#C70039','#8E44AD','#088812','#888208','#020725','#25B6C2','#D83FD8');



?>
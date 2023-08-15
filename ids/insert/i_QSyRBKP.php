<?php

include("../../includes/dbfile.php");

$apikey = "cbroz";



/**************** GET ALL VALUES ************/

$devid = $_GET['device_id'];

$deptid = $_GET['company_id'];
$temperature = $_GET['temperature'];
if (!(is_numeric($_GET['temperature']))) {

	$newsql = "select * from livdev where devid = '$devid' and pcode ='11' order by autoid DESC limit 1";
	$resultss = mysqli_query($connection, $newsql);


	while ($ros = mysqli_fetch_assoc($resultss)) {
		$temperature = $ros['value'];
	}
}



$humidity = $_GET['humidity'];

if (!(is_numeric($_GET['humidity']))) {

	$newsql = "select * from livdev where devid = '$devid' and pcode ='12' order by autoid DESC limit 1";
	$resultss = mysqli_query($connection, $newsql);

	while ($ros = mysqli_fetch_assoc($resultss)) {
		$humidity = $ros['value'];
	}
}

$timest = $_GET['temp_date'];
$timest = $timest - 19800;
//echo date_default_timezone_get();
//exit();
$now = date('H.i', $timest);
$today = date('Y.m.d', $timest);
$dbject = date("Y-m-d H:i:s", $timest);

//pCODEs 13-20
$P1 = $_GET['P1'];
$P2 =  $_GET['P2'];
$P3 =  $_GET['P3'];
$P4 =  $_GET['P4'];
$P5 =  $_GET['P5'];
$P6 =  $_GET['P6'];
$P7 =  $_GET['P7'];
$P8 =  $_GET['P8'];

$parr = array();
$pn = array();
$parr = [$P1, $P2, $P3, $P4, $P5, $P6, $P7, $P8];
$pn = ['P1', 'P2', 'P3', 'P4', 'P5', 'P6', 'P7', 'P8'];
//	date_default_timezone_set('asia/kolkata');

// insert temperature

if (isset($_GET['API_KEY'])) {
	if ($_GET['API_KEY'] == $apikey) {

		$tsql = "INSERT INTO livdev (devid,deptid,pcode,parameter,value,time,date,dtype,utime)
			  VALUES ('$devid','$deptid','11','temperature','$temperature','$now','$today','$dbject','$timest')";

		$hsql = "INSERT INTO livdev (devid,deptid,pcode,parameter,value,time,date,dtype,utime)
			  
			      VALUES ('$devid','$deptid','12','humidity','$humidity','$now','$today','$dbject','$timest')";




		$tresult = mysqli_query($connection, $tsql);


		$hresult = mysqli_query($connection, $hsql);

		//echo $tresult;

		//echo "HELLO COUNT is ".$tresult;
		if ($tresult == 1) {

			echo "New record created successfully";
		} else {


			//	 echo "error in temp Insertion ".$tsql."In  ".mysqli_error($connection);

		}


		$ind = 0;

		for ($k = 13; $k <= 20; $k++) {
			$ind = $k - 13;
			if (strictEmpty($parr[$ind])) {
				continue;
			}


			$sql = "INSERT INTO livdev (devid,deptid,pcode,parameter,value,time,date,dtype,utime)
			  
			      VALUES ('$devid','$deptid','$k','$pn[$ind]','$parr[$ind]','$now','$today','$dbject','$timest')";

			$result  =  mysqli_query($connection, $sql);


			if ($result == 1) {
				//	echo "New record created successfully";

			} else {

				//echo "Error: " . $sql . "<br>" . mysqli_error($connection);

				exit();
			}
		}
	}
}

function strictEmpty($var)
{

	// Delete this line if you want space(s) to count as not empty
	$var = trim($var);

	if (isset($var) === true && $var === '') {

		return true;
	} else {

		return false;
	}
}

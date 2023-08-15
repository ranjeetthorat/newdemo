<?php
include("includes/dbfile.php");
$apikey = "clog";
	if(isset($_GET['live'])){
		if($_GET['live'] == $apikey){
			$tsql = "SELECT 1";
			$tresult=mysqli_query($connection,$tsql);
			if($tresult == 1)
			{	 
				echo "LIVE";
				exit();
				//echo "New record created successfully";	 
			} 
			else 
			 {	 
				// echo "error in temp Insertion ".$tsql."In  ".mysqli_error($connection); 
			 }
			
		}
	}
?>
<?php
	
	if(isset($_GET["hoot"]) ){
		$data = "".$_GET["hoot"]."";
		$file = fopen("hooter.txt","w");
		fwrite($file,$data);
		fclose($file);
		echo "done";
	} else {
		$file = fopen("hooter.txt","r");
		while(!feof($file)){
			echo fgetc($file);
		}
	}
?>
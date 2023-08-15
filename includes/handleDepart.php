<?php
include('dbfile.php');
session_start();
if (isset($_POST['editdepa'])) {

    $aname = $_POST['aname'];
    $aid = $_POST['did'];
    $aemail = $_POST['email'];
    $acontact = $_POST['contact'];

    $today = date("Y.m.d");
    $now = date("H.i.s");
  

    $sql = "update depart set
											name='$aname',
											id='$aid',
											contact='$acontact',
											email = '$aemail',
											time='$now',
											date='$today'
											where id='$aid' ";

    if (mysqli_query($connection, $sql)) {


        

        echo "<script>alert('Department edit succesfully');window.location='../showDepart.php'; </script>";
    } else {
       
        echo "<script> alert('Department edit Failed');window.location='../showDepart.php'; </script>";
    }
}


if (isset($_POST['ueditdepa'])) {

    $aname = $_POST['aname'];
    $aid = $_POST['did'];
    $aemail = $_POST['email'];
    $acontact = $_POST['contact'];

    $today = date("Y.m.d");
    $now = date("H.i.s");
  

    $sql = "update depart set
											name='$aname',
											id='$aid',
											contact='$acontact',
											email = '$aemail',
											time='$now',
											date='$today'
											where id='$aid' ";

    if (mysqli_query($connection, $sql)) {


        $name = $_SESSION['nameOfUser'];
$uid = $_SESSION['userlogged'];
$today = date('Y.m.d');
$now = date('H.i');

$insertlog = "insert into logdetail (name,userid,date,printtime,remark)
        values('$name','$uid','$today','$now','User update Department')

";
$resss = mysqli_query($connection,$insertlog);

        echo "<script>alert('Department edit succesfully');window.location='../ushowDepart.php'; </script>";
    } else {
       
        echo "<script> alert('Department edit Failed');window.location='../ushowDepart.php'; </script>";
    }
}

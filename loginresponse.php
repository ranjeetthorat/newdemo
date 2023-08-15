<?php
error_reporting(E_ALL);
ini_set('display_errors', 1);

session_start();
include("includes/dbfile.php");
//user Login authentication

if (isset($_POST['ulogin'])) {

    $userName = $_POST["username"];
    $password = $_POST["password"];
    //$dsq"select * from username where uid='$userName'";
    $sql = "select * from username where uid='$userName' and password='$password' and status='true'";
    $result = mysqli_query($connection, $sql);

    $passatt = 0;
    $count = mysqli_num_rows($result);
    if ($count == 1) {
        $_SESSION['uloggedin'] = true;
        $_SESSION["userlogged"] = $userName;

        while ($row = mysqli_fetch_assoc($result)) {
            $_SESSION['nameOfUser'] = $row['name'];
        }

        echo "success";
    } else {

        if (isset($_SESSION['uattempt']))
            $_SESSION['uattempt'] = $_SESSION['uattempt'] + 1;
        else
            $_SESSION['uattempt'] = 1;

        if ($_SESSION['uattempt'] > 3) {
            $bsql = "update username set status='flase' where uid='$userName'";
            $block = mysqli_query($connection, $bsql);
        }

        echo "fail";
    }
}
if (isset($_POST['alogin'])) {

    $adminName = $_POST["username"];
    $apassword = $_POST["password"];
    $sql = "select * from admin where uid='$adminName' and password='$apassword' and status='true'";
    $result = mysqli_query($connection, $sql);
    $count = mysqli_num_rows($result);
    if ($count == 1) {
        $_SESSION['aloggedin'] = true;
        $_SESSION["adminlogged"] = $adminName;

        while ($row = mysqli_fetch_assoc($result)) {
            $_SESSION['nameOfAdmin'] = $row['name'];
        }
        echo "success";
    } else {

        if (isset($_SESSION['aattempt']))
            $_SESSION['aattempt'] = $_SESSION['aattempt'] + 1;
        else
            $_SESSION['aattempt'] = 1;

        if ($_SESSION['aattempt'] > 3) {
            $bsql = "update admin set status='flase' where uid='$adminName'";
            $block = mysqli_query($connection, $bsql);
        }

        echo "fail";
    }
}



if (isset($_POST['mlogin'])) {

    $manuName = strip_tags($_POST["username"]);
    $mpassword = strip_tags($_POST["password"]);
    //$sql="select * from manu where name='$manuName' and password='$mpassword'";
    $stmt = $connection->prepare("select * from manu where name=? and password=?");
    $stmt->bind_param('ss', $manuName, $mpassword);
    $stmt->execute();
    $result = $stmt->get_result();

    //$result = mysqli_query($connection,$sql);
    $count = mysqli_num_rows($result);
    if ($count == 1) {
        $_SESSION['mloggedin'] = true;
        $_SESSION["manulogged"] = $manuName;
        echo "success";
    } else {
        echo "fail";
    }
}
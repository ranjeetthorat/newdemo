
<?php
include('dbfile.php');
function getUserInfo($connection,$userid) {

  $userinfo = array();
 
 if($userid == 'b') {
  $userinfo['name'] = 'SYSTEM';
  $userinfo['uid'] = 'uid';
  $userinfo['role'] = 'role';
  $userinfo['designation'] = 'designation';
  $userinfo['department'] = 'department';

  return $userinfo;
 }
 else {
 $sql = "select * from username where uid ='$userid'";
 $result = mysqli_query($connection,$sql);

 if(mysqli_num_rows($result)) {
   while($row = mysqli_fetch_assoc($result)) {
    $userinfo['name'] = $row['name'];
    $userinfo['uid'] = $row['uid'];
    $userinfo['role'] = $row['role'];
    $userinfo['designation'] = $row['designation'];
    $userinfo['department'] = $row['deptname'];
    $userinfo['departmentid'] = $row['deptid'];
    
   }
   return $userinfo;
 }
 }

}
function getFooterText() {

$footerttext = 'copyrights @ cbroz.com';
return $footerttext;

}
function geturlText() {

  $url ='https://cbroz.com';
  return $url;

}
function getAccList($connection,$userid,$comparater) {
  $useracess = array();
  $urole='';
  $acc = "SELECT role from username where uid ='$userid' limit 1 ";
  
  $resa = mysqli_query($connection,$acc);
  if($resa) {
    while($rowacc = mysqli_fetch_assoc($resa)) {
      $urole = $rowacc['role'];
    }
    
  } else {
    die("error occurred in getting access role");
  }

  $getlist = "select xscode from acccontrols where groupname ='$urole' ";
  
  $resultsc = mysqli_query($connection,$getlist);
  if($resultsc) {
       $i=0;
       while($newrow= mysqli_fetch_assoc($resultsc)) {
        $useracess[$i] = $newrow['xscode'];
        $i++;
       }
     
  } else {

  }
   
  return $useracess;
}
if(!isset($display)) {
 
  echo "<script defer src='includes/timeout.js'>


  </script>";
}


?>
<script>
 

</script>
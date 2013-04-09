<?php
include("connect.php");
ini_set('date.timezone', "Asia/Kolkata");
$tab=$_POST['tab'];
$name=$_POST['name'];
$num=$_POST['num'];
$email=$_POST['email'];
$coll=$_POST['coll'];
$date=date("Y-m-d");
$time=date("H").":".date("i").":".date("s");
$cquery="select num  , email from ".$tab;
$msg="These credentials are already registered.";
$cresult=mysql_query($cquery);
if(!$cresult)
die(mysql_error());
$good=1;
while($row=mysql_fetch_array($cresult))
{
	if($row['num']==$num || $row['email']==$email)
	$good=0;
}
if($good==1)
{
	$query="insert into ".$tab." values('$name','$num','$email','$coll','$time','$date')";
	$result=mysql_query($query);
	if(!$result)
	{
	die($msg=mysql_error());
	}
	else
	{
	$msg="Registration successfull.";
	mail($email,"Etamax2013 event : ".$tab , "You have been successfully registered");
	}
}
echo $msg;

mysql_close($con);
?>
	
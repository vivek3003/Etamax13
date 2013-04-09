<?php

$hostname ="etamax13.db.10296543.hostedresource.com";
$username ="etamax13";
$dbname ="etamax13";
$password="Et@m@x2013";
$con= mysql_connect($hostname, $username, $password) ;
if(!$con)
die("Connection unsuccessfull");
mysql_select_db("etamax13",$con);
/*
$hostname ="localhost";
$username ="root";
$dbname ="etamax13";
$password="";
$con= mysql_connect($hostname, $username, $password) ;
if(!$con)
die("Connection unsuccessfull");
mysql_select_db("etamax13",$con);*/
?>
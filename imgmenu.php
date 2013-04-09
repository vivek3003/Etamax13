<?php
$mid=1;
if(isset($_GET['iid']))
{
	$mid=$_GET['iid'];
}
if($mid==1)
{
	?>
	<div class="bigimg"><div id="closeimg" onclick="climg()"></div><img src="images/gallery/1.jpg" align="middle"/><h3>band eliminations rocked inorbit!!</h3></div>
			<?php }
else if($mid==2)
{
	?>
	<div class="bigimg"><div id="closeimg" onclick="climg()"></div><img src="images/gallery/2.jpg" align="middle"/><h3>The band eliminations stole the headlines</h3></div>

			<?php }
else if($mid==3)
{
	?>
	<div class="bigimg"><div id="closeimg" onclick="climg()"></div><img src="images/gallery/3.jpg" align="middle"/><h3>Stalls </h3></div>
			<?php }
else if($mid==4)
{
	?>
	<div class="bigimg"><div id="closeimg" onclick="climg()"></div><img src="images/gallery/4.jpg" align="middle"/><h3>Street play competetion in progress</h3></div>

			<?php }
else if($mid==5)
{
	?>
	<div class="bigimg"><div id="closeimg" onclick="climg()"></div><img src="images/gallery/5.jpg" align="middle"/><h3>Robotics craze in Agnels!!</h3></div>

			<?php }
else if($mid==6)
{
	?>
	<div class="bigimg"><div id="closeimg" onclick="climg()"></div><img src="images/gallery/6.jpg" align="middle"/><h3>Before i die..!!</h3></div>

			<?php }
else if($mid==7)
{
	?>
	<div class="bigimg"><div id="closeimg" onclick="climg()"></div><img src="images/gallery/7.jpg" align="middle"/><h3>Group dance..!!</h3></div>

			<?php }
else if($mid==8)
{
	?>
	<div class="bigimg"><div id="closeimg" onclick="climg()"></div><img src="images/gallery/8.jpg" align="middle"/><h3>Evening crowds enjoyin the band competetions!!</h3></div>
<?php 
}
?>


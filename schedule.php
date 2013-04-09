<?php
$mid=1;
if(isset($_GET['id']))
{
	$mid=$_GET['id'];
}
if($mid==1)
{
	?>
<h1 id="back">Day 1</h1>
<img src='images/day14.jpg'/><div id="back" onclick='showbox()'>BACK</div>
<?php }
else if($mid==2)
{
	?>
<h1 id="back">Day 2</h1><img src='images/day15.jpg'/><div id="back" onclick='showbox()'>BACK</div>
<?php }
else if($mid==3)
{
?>
<h1 id="back">Day 3</h1><img src='images/day16.jpg'/><div id="back" onclick='showbox()'>BACK</div>
<?php

}
?>

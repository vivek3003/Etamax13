<html>

	<head> <title> Registrations </title>
	<link rel="stylesheet" type="text/css" href="register.css"> 
	<script src="Jquery.js"></script>
	<script src="register.js"></script>
	
	</head>
	
	
	<body>
	<?php if(isset($_POST['eventname']))
			{
				$val=$_POST['eventname'];
			}
			else $val="zz";
	?>
	<div id="container">
			<img id="load" src="load.gif"/>
		<form id="regform" name="regform" action="registerevent.php" method="post">
								<?php 
								if($val!="zz")
								{
								echo "<input type=\"hidden\" name=\"fromevent\" value=\"".$val."\"/>";
								}
							?>
		<table>
			<tr>
				<td>
					Select the event
				</td>
				<td>

					<select name="tab" <?php if(isset($_POST['eventname'])) echo "disabled";?>>
						<option value="alap" <?php if($val=="alap") echo "selected";?>>Alaap</option>
						<option value="jam" <?php if($val=="jam") echo "selected";?>>Just a minute</option>
						<option value="reve" <?php if($val=="reve") echo "selected";?>>Reverse engineering</option>
						<option value="band" <?php if($val=="band") echo "selected";?>>Calm like a bomb</option>
						<option value="bulldozer" <?php if($val=="bulldozer") echo "selected";?>>Bulldozer wars</option>
						<option value="click" <?php if($val=="click") echo "selected";?>>Click</option>
						<option value="contraption" <?php if($val=="contraption") echo "selected";?>>Contraption</option>
						<option value="dadvocate" <?php if($val=="dadvocate") echo "selected";?>>Devil's Advocate</option>
						<option value="jagger" <?php if($val=="jagger") echo "selected";?>>Move like jagger</option>
						<option value="natak" <?php if($val=="natak") echo "selected";?>>Nukkad natak</option>
						<option value="obstacle" <?php if($val=="obstacle") echo "selected";?>>Obstacle track</option>
						<option value="rackstack" <?php if($val=="rackstack") echo "selected";?>>Rack your stack</option>
						<option value="realstory" <?php if($val=="realstory") echo "selected";?>>The real story</option>
						<option value="robosoccer" <?php if($val=="robosoccer") echo "selected";?>>Robosoccer</option>
						<option value="savequeen" <?php if($val=="savequeen") echo "selected";?>>Save the queen</option>
						<option value="stepsync" <?php if($val=="stepsync") echo "selected";?>>Step sync</option>
						<option value="tpp" <?php if($val=="tpp") echo "selected";?>>Technical paper</option>
						<option value="truss" <?php if($val=="truss") echo "selected";?>>Truss</option>
					</select> 
				</td>
				
			</tr>
			<tr>
				<td>Your name/team captain's name :</td><td><input type="text" name="name"/></td>
			</tr>
				<td>Phone number :</td><td><input type="text" name="num"/></td>
			</tr>
			<tr>
				<td>Email :</td><td><input type="text" id="email" name="email"/></td>
			</tr>
			<tr>
				<td>College :</td><td><input type="text" name="coll"/></td>
			</tr>
			<tr>
				<td><button id="regbtn" type="submit" onClick="return false;"/>Register</button></td><td><button type="reset" />Reset</button></td>
			</tr>
		</table>
		</form>
		
	</div>
	
	</body>
	
</html>
				
						
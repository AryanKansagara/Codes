<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<title>Arrays in PHP</title>
</head>
<body>


<?php 
	$friends = array("Kevin","Oscar","Jim");
	echo $friends;//prints the whole array 
	echo "<br>";
	echo $friends[1];//access the element at index 1
	echo "<br>";
	//modify element
	$friends[1] = "Dwight";
	echo $friends[1];
	// $friends[0] = 400;//we can store a number also 
	echo "<br>";
	$friends[3] = "Angela";//adding an element in the array 
	echo count($friends);//len of array 
	
?>
</body>
</html>
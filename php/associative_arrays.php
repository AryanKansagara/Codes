<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<title>Associative Arrays</title>
</head>
<body>

<?php 
	// in this we store key and value pairs 
	$grades = array("Jim"=>"A+", "Pam"=>"B-");
	// you can also modify values in this associative arrays like arrays 
	$grades["Jim"] = "C-";
	echo $grades["Jim"];
?>

</body>
</html>
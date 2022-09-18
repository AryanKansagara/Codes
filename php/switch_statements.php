<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<title>Switch Statements</title>
</head>
<body>
<form action="switch_statements.php" method="post">
	What's your grade:<br><input type="text" name="grade">

	<br><input type="submit">
	

</form>
<?php 
	$grade = $_POST["grade"];
	switch($grade){
		case "A":
			echo "You did amazing!";
			break;
		case "F":
			echo "Try hard next time!";
			break;
		default:
			echo "Invalid Grade";
			
	}	

?>

</body>
</html>
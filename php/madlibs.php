<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<title>Mad Libs Game</title>
</head>
<body>
<form action="madlibs.php" method="get">
	Color: <br><input type="text" name="color"><br>
	Pluarl Noun: <br><input type="text" name="pluralNoun"><br>
	Celebrity: <br><input type="text" name="celebrity"><br>

	<input type="submit">
</form>
<br>
<br>

<?php
	$color = $_GET["color"];
	$pluralNoun = $_GET["pluralNoun"];
	$celebrity = $_GET["celebrity"];
	echo "Roses are $color <br>";
	echo "$pluralNoun are blue <br>";
	echo "I love $celebrity<br>";
?>
</body>
</html>
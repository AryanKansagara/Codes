<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<title>If Statements</title>
</head>
<body>

<?php

	// $isMale = true;
	// if($isMale){
	// 	echo "You are Male";
	// }
	// else{
	// 	echo "You are not Male";
	// }

	function maxNum($n,$m){
		if($n>=$m){
			return $n;
		}
		else{
			return $m;
		}
	}

	echo maxNum(3,4);
?>

</body>
</html>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Working with Strings</title>
</head>
<body>
<?php
    $string = "Hello YOU!!";
    echo $string ;
    echo "<br>";
    // string functions
    echo strtolower($string);
    echo "<br>";
    echo strtoupper($string);
    echo "<br>";
    echo strlen($string);
    echo "<br>";
    echo $string[0];
    echo "<br>";
    // modifying string
    // $string[0] = "A";

    // replacing substring
    echo str_replace("YOU","Aryan",$string);
    echo "<br>";

    // substring
    echo substr($string,1,3);//get a substring starting from index 1 of length 3
    echo "<br>";

?>
</body>
</html>
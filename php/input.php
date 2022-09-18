<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Getting User Input</title>
</head>
<body>

<form action="input.php" method="get">
    Name: <br><input type="text" name="username">
    <br>
    Age: <br><input type="number" name="age">
    <br>
    <input type="submit">
</form>
<br>
Your name is <?php echo $_GET["username"] ?>
<br>
Your age is <?php echo$_GET['age']?>

</body>
</html>
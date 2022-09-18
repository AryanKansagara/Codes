<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<title>Classes And Objects</title>
</head>
<body>


<?php 
	
	
	class Book {
		var $title;//attribute
		var $author;//attribute
		var $pages;//attribute
	}	

	$book1 = new Book;//object
	$book1->title = "Harry Potter";
	$book1->author = "JK Rowling";
	$book1->pages=400;


	$book2 = new Book;//object
	$book2->title = "Lord of the rings";
	$book2->author = "Tolkien";
	$book2->pages=700;


	echo $book1->title;
	echo "<br>";
	echo $book2->author;


?>

</body>
</html>
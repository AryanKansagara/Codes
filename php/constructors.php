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

		//constructor
		function __construct($aTitle,$aAuthor,$aPages){
			$this->title = $aTitle;
			$this->author = $aAuthor;
			$this->pages = $aPages;
		}
	}	

	$book1 = new Book("Harry Potter","JK Rowling",400);//object
	<!-- $book1->title = "Harry Potter";
	$book1->author = "JK Rowling";
	$book1->pages=400; -->


	$book2 = new Book("Lord of the rings","Tolkien",700);//object
	<!-- $book2->title = "Lord of the rings";
	$book2->author = "Tolkien";
	$book2->pages=700; -->


	echo $book1->title;
	echo "<br>";
	echo $book2->author;

	


?>

</body>
</html>
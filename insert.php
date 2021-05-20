<?php
// database connection code
// $con = mysqli_connect('localhost', 'database_user', 'database_password','database');

$con = mysqli_connect('localhost', 'root', '','rizkel sisig');

// get the post records
$firstname = $_POST['firstname'];
$Contact = $_POST['Contact'];
$Address = $_POST['Address'];
$sisigtype = $_POST['sisigtype'];
$quantity = $_POST['quantity'];

// database insert SQL code
$sql = "INSERT INTO `order form` (`firstname`, `Contact`, `Address`, `sisigtype`, `quantity`, `Id`) VALUES ( '$firstname', '$Contact', '$Address','$sisigtype', '$quantity', '0',)";

// insert in database 
$rs = mysqli_query($con, $sql);

if($rs)
{
	echo "Contact Records Inserted";
}

?>
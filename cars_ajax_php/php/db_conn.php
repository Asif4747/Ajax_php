<?php
	define('DEBUGMODE', true);
	if(DEBUGMODE == true)
	{
	    ini_set('display_errors', 'On');
	    error_reporting(E_ALL);
	}
	else
	{
	    ini_set('display_errors', 'Off');
	    error_reporting(0);
	}
	$servername = "localhost";
	$username = "root";
	$password = "";
	$dbname 	= "asif_cars";

	// Create connection
	$conn = new mysqli($servername, $username, $password, $dbname);

	// Check connection
	if ($conn->connect_error) {
	    die("Connection failed: " . $conn->connect_error);
	} 
?>
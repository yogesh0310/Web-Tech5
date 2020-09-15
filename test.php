<?php
include_once "./config.php";
include "./database.php";
include "./event.php";

header('Content-type: application/json');

$db = new Database();
$student = new event($db->connect());


?>
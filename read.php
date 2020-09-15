<?php
include_once "./config.php";
include "./core/Database.php";
include "./core/event.php";

use Core\Data\Database;
use Core\Data\event;

header('Content-type: application/json');

$db = new Database();
$read = new event($db->connect());

echo $read->getRecords();

?>
<?php
include_once "./config.php";
include "./core/Database.php";
include "./core/event.php";

use Core\Data\Database;
use Core\Data\event;

header('Content-type: application/json');

$db = new Database();
$deleteEntry = new event($db->connect());

$deleteEntry->fname=$_GET['Firstname'];

$response = array(
    "status" => "Failed",
    "message" => "Error in deleting the  record"
);

if ( $deleteEntry->delete() > 0 ) {
    $response['status'] = "Success";
    $response['message'] = "Record Deleted";
}

echo json_encode($response);

?>
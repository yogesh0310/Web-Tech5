<?php
include_once "./config.php";
include "./core/Database.php";
include "./core/event.php";

use Core\Data\Database;
use Core\Data\event;

header('Content-type: application/json');

$db = new Database();
$updateEntry = new event($db->connect());

$updateEntry->fname=$_GET['fname'];
$updateEntry->mname=$_GET['mname'];
$updateEntry->lname=$_GET['lname'];
$updateEntry->mobile=$_GET['mobile'];
$updateEntry->email=$_GET['email'];
$updateEntry->college=$_GET['college'];
$updateEntry->address=$_GET['address'];


$response = array(
    "status" => "Failed",
    "message" => "Error in updating the  record"
);

if ( $updateEntry->update() > 0 ) {
    $response['status'] = "Success";
    $response['message'] = "Record Updated";
}

echo json_encode($response);




?>
<?php
include_once './config.php';
include "./core/database.php";
include "./core/event.php";

use Core\Data\Database;
use Core\Data\event;


$db = new Database();
$insert_entry = new event($db->connect());

$insert_entry->fname=$_GET['fname'] ?? null ;
$insert_entry->mname=$_GET['mname'] ?? null ;
$insert_entry->lname=$_GET['lname'] ?? null ;
$insert_entry->mobile=$_GET['mobile'] ?? null ;
$insert_entry->email=$_GET['email'] ?? null ;
$insert_entry->department=$_GET['dept'] ?? null ;
$insert_entry->gender=$_GET['gender'] ?? null ;
$insert_entry->address=$_GET['address'] ?? null ;
$insert_entry->college=$_GET['college'] ?? null ;
$insert_entry->event=$_GET['event'] ?? null ;

$response = array(
    "status" => "Failed",
    "data" => "Error in inserting the record"
);
;
if ($insert_entry->insertRec() > 0) {
    $response['status'] = "Success";
    $response['data'] = "Data inserted";
}

return $response['status'];


?>
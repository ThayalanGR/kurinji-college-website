<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, PUT, POST, DELETE");
header("Access-Control-Allow-Headers: *");
header("Content-Type: application/json; charset=UTF-8");
require('./config/dbconfig.php');


if ($_SERVER['REQUEST_METHOD'] == 'POST') {

    if ($_POST['method'] === 'post') {
        $name = $_POST["name"];
        $batch = $_POST["batch"];
        $department = $_POST["department"];
        $address = $_POST["address"];
        $mobile = $_POST["mobile"];
        $email = $_POST["email"];
        $employementDetails = $_POST["employment"];
        $sql = "INSERT INTO `tbl_alumni` ( `name`, `batch`, `department`, `address`, `mobile`, `email`, `employment_details`) VALUES ('" . $name . "','" . $batch . "','" . $department . "','" . $address . "','" . $mobile . "','" . $email . "', '" . $employementDetails . "')";
        mysqli_query($DB, $sql);
        echo json_encode($sql);
    } else if ($_POST['method'] === 'delete') {
        $id = $_POST['id'];
        $query = "DELETE FROM tbl_alumni WHERE id=" . $id;

        if (mysqli_query($DB, $query)) {
            echo json_encode(array("status" => true));
        } else {
            echo json_encode(array("status" => false));
        }
    }

}

if ($_SERVER['REQUEST_METHOD'] == 'GET') {
    $queryString = "SELECT * from tbl_alumni ORDER BY id ASC";

    $row = mysqli_query($DB, $queryString);

    echo json_encode(mysqli_fetch_all($row));
}

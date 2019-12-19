<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, PUT, POST, DELETE");
header("Access-Control-Allow-Headers: *");
header("Content-Type: application/json; charset=UTF-8");
require('./config/dbconfig.php');


if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    if ($_POST['method'] === 'post') {
        $name = $_POST["name"];
        $designation = $_POST["designation"];
        $priority = $_POST["priority"];
        $department = $_POST["department"];
        $about = $_POST["about"];
    
        if ($name) {
            $sql = "INSERT INTO `tbl_staffs` (`name`, `designation`, `priority`, `department`, `about`) VALUES ('".$name."','".$designation."', '".$priority."', '".$department."', '".$about."')";
            mysqli_query($DB, $sql);
            echo json_encode($fileName);
        } else {
            echo "move_uploaded_file function failed";
        }
    } elseif ($_POST['method'] === 'delete') {
        $id = $_POST['id'];
        $query = "DELETE FROM tbl_staffs WHERE sid=".$id;
    
        if (mysqli_query($DB, $query)) {
            echo json_encode(array("response"=> true));
        } else {
            echo json_encode(array("response"=> false));
        }
    }
}

if ($_SERVER['REQUEST_METHOD'] == 'GET') {
    if (isset($_GET['department'])) {
        $dept = $_GET['department'];
        $queryString = "SELECT * from tbl_staffs WHERE department = '".$dept."' ORDER BY priority ASC";
    
        $row = mysqli_query($DB, $queryString);
    
        echo json_encode(mysqli_fetch_all($row));
    } elseif (isset($_GET['priority'])) {
        $prior = $_GET['priority'];
        $staffid = $_GET['staffId'];
        $queryString = "UPDATE tbl_staffs SET priority = ".$prior." WHERE sid = ".$staffid;
        $row = mysqli_query($DB, $queryString);
    
        echo json_encode(array("status" => true));
    } else {
        $queryString = "SELECT * from tbl_staffs ORDER BY priority ASC";
    
        $row = mysqli_query($DB, $queryString);
    
        echo json_encode(mysqli_fetch_all($row));
    }
}

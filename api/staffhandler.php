<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, PUT, POST, DELETE");
header("Access-Control-Allow-Headers: *");
header("Content-Type: application/json; charset=UTF-8");
require('./config/dbconfig.php');


if ($_SERVER['REQUEST_METHOD'] == 'POST') {

    if($_POST['method'] === 'post') {
        $fileName = preg_replace("/[^a-zA-Z0-9.]/", "", $_FILES["file"]["name"]);
        $fileTmpLoc = $_FILES["file"]["tmp_name"]; // File in the PHP tmp folder
        $fileType = $_FILES["file"]["type"]; // The type of file it is
        $fileSize = $_FILES["file"]["size"]; // File size in bytes
        $fileErrorMsg = $_FILES["file"]["error"]; // 0 for false... and 1 for true
        $name = $_POST["name"];
        $designation = $_POST["designation"];
        $department = $_POST["department"];
        $about = $_POST["about"];
    
        if (move_uploaded_file($fileTmpLoc, "./uploads/staffs/$fileName")) {
            $sql = "INSERT INTO `tbl_staffs` (`name`, `designation`, `department`, `profileurl`, `about`) VALUES ('".$name."','".$designation."','".$department."', '/api/uploads/staffs/".$fileName."', '".$about."')";
            mysqli_query($DB, $sql);
            echo json_encode($fileName);
        } else {
            echo "move_uploaded_file function failed";
        }

    } else if($_POST['method'] === 'delete') {
        $id = $_POST['id'];
        $query = "DELETE FROM tbl_staffs WHERE sid=".$id;
    
        if(mysqli_query($DB, $query)) {
            echo json_encode(array("response"=> true));
        } else {
            echo json_encode(array("response"=> false));
        }
    
    }
}

if ($_SERVER['REQUEST_METHOD'] == 'GET') {
    
    if(isset($_GET['department'])) {
        $dept = $_GET['department'];
        $queryString = "SELECT * from tbl_staffs WHERE department = '".$dept."'";   
    
        $row = mysqli_query($DB, $queryString);
    
        echo json_encode(mysqli_fetch_all($row)); 
    } else {
        $queryString = "SELECT * from tbl_staffs";   
    
        $row = mysqli_query($DB, $queryString);
    
        echo json_encode(mysqli_fetch_all($row)); 
        
    }

}



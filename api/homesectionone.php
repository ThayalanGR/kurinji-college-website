<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, PUT, POST, DELETE");
header("Access-Control-Allow-Headers: *");
header("Content-Type: application/json; charset=UTF-8");
require('./config/dbconfig.php');


if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $fileName = preg_replace("/[^a-zA-Z0-9.]/", "", $_FILES["file"]["name"]);
    $fileTmpLoc = $_FILES["file"]["tmp_name"]; // File in the PHP tmp folder
    $fileType = $_FILES["file"]["type"]; // The type of file it is
    $fileSize = $_FILES["file"]["size"]; // File size in bytes
    $fileErrorMsg = $_FILES["file"]["error"]; // 0 for false... and 1 for true
    $caption = $_POST["caption"];

    if (move_uploaded_file($fileTmpLoc, "./uploads/homesectionone/$fileName")) {
        $sql = "INSERT INTO `tbl_event` (`caption`, `filepath`) VALUES ('".$caption."', '/api/uploads/homesectionone/".$fileName."')";
        mysqli_query($DB, $sql);
        echo json_encode($fileName);
    } else {
        echo "move_uploaded_file function failed";
    }
}

if ($_SERVER['REQUEST_METHOD'] == 'GET') {

    $queryString = "select * from tbl_event order by id desc";

    $row = mysqli_query($DB, $queryString);

    echo json_encode(mysqli_fetch_all($row));
}



if ($_SERVER['REQUEST_METHOD'] == 'DELETE') {

    parse_str(file_get_contents("php://input"),$post_vars);
    
    $id = $post_vars['id'];

    $query = "DELETE FROM tbl_event WHERE id=".$id;

    if(mysqli_query($DB, $query)) {
        echo json_encode(array("response"=> true));
    } else {
        echo json_encode(array("response"=> false));
    }

}

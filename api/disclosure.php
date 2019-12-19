<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, PUT, POST, DELETE");
header("Access-Control-Allow-Headers: *");
header("Content-Type: application/json; charset=UTF-8");
require('./config/dbconfig.php');


if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    if ($_POST['method'] === 'post') {
        $fileName = preg_replace("/[^a-zA-Z0-9.]/", "", $_FILES["file"]["name"]);
        $fileName = time().'_'.$fileName;
        $fileTmpLoc = $_FILES["file"]["tmp_name"]; // File in the PHP tmp folder
        $fileType = $_FILES["file"]["type"]; // The type of file it is
        $fileSize = $_FILES["file"]["size"]; // File size in bytes
        $fileErrorMsg = $_FILES["file"]["error"]; // 0 for false... and 1 for true
        if (!is_dir("./uploads/disclosure")) {
            mkdir("./uploads/disclosure");
        }
    
        if (move_uploaded_file($fileTmpLoc, "./uploads/disclosure/$fileName")) {
            mysqli_query($DB, "DELETE FROM `tbl_disclosure`");
            $sql = "INSERT INTO `tbl_disclosure` (`filepath`, `filename`) VALUES ('/api/uploads/disclosure/".$fileName."', '".$fileName."')";
            mysqli_query($DB, $sql);
            echo json_encode($fileName);
        } else {
            echo "move_uploaded_file function failed";
        }
    } elseif ($_POST['method'] === 'delete') {
        $id = $_POST['id'];
        $query = "DELETE FROM tbl_disclosure WHERE id=".$id;
    
        if (mysqli_query($DB, $query)) {
            echo json_encode(array("response"=> true));
        } else {
            echo json_encode(array("response"=> false));
        }
    }
}

if ($_SERVER['REQUEST_METHOD'] == 'GET') {
    $queryString = "select * from tbl_disclosure order by id desc";

    $row = mysqli_query($DB, $queryString);

    echo json_encode(mysqli_fetch_all($row));
}

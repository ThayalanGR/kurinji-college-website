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
        $title = $_POST["title"];
        $description = $_POST["description"];
        if (!is_dir("./uploads/infrastructure")) {
            mkdir("./uploads/infrastructure");
        }
    
        if (move_uploaded_file($fileTmpLoc, "./uploads/infrastructure/$fileName")) {
            $sql = "INSERT INTO `tbl_infrastructure` (`title`,`description`, `filepath`) VALUES ('".$title."','".$description."', '/api/uploads/infrastructure/".$fileName."')";
            mysqli_query($DB, $sql);
            echo json_encode($fileName);
        } else {
            echo "move_uploaded_file function failed";
        }
    } elseif ($_POST['method'] === 'delete') {
        $id = $_POST['id'];
        $sql = "SELECT `filepath` FROM `tbl_infrastructure` WHERE id=".$id;
        if ($row = mysqli_query($DB, $sql)) {
            $result = mysqli_fetch_assoc($row);
            $resultSplit = explode("/", $result["filepath"]);
            $fileName = $resultSplit[count($resultSplit) - 1];
            unlink('./uploads/infrastructure/'.$fileName);
            $query = "DELETE FROM tbl_infrastructure WHERE id=".$id;
            if (mysqli_query($DB, $query)) {
                echo json_encode(array("response"=> true));
            } else {
                echo json_encode(array("response"=> false));
            }
        } else {
            echo json_encode(array("response"=> false));
        }
    }
}

if ($_SERVER['REQUEST_METHOD'] == 'GET') {
    $queryString = "select * from tbl_infrastructure order by id desc";

    $row = mysqli_query($DB, $queryString);

    echo json_encode(mysqli_fetch_all($row));
}

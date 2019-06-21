<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, PUT, POST, DELETE");
header("Access-Control-Allow-Headers: *");
header("Content-Type: application/json; charset=UTF-8");
require('./config/dbconfig.php');

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    if ($_POST['method'] === 'upload') {
        $fileName = preg_replace("/[^a-zA-Z0-9.]/", "", $_FILES["file"]["name"]);
        $fileTmpLoc = $_FILES["file"]["tmp_name"]; // File in the PHP tmp folder
        $fileType = $_FILES["file"]["type"]; // The type of file it is
        $fileSize = $_FILES["file"]["size"]; // File size in bytes
        $fileErrorMsg = $_FILES["file"]["error"]; // 0 for false... and 1 for true
        
        $filename = $_POST["filename"];
        $tag = $_POST["tag"];
        $department = $_POST["department"];
        $staffid = $_POST["staffid"];
        $staffname = $_POST["staffname"];
        $semester = $_POST["semester"];
        
        if (!is_dir("./uploads/stucorfiles")) {
            mkdir("./uploads/stucorfiles");
        }
    
        if (move_uploaded_file($fileTmpLoc, "./uploads/stucorfiles/$fileName")) {
            $sql = "INSERT INTO `tbl_stucorfiles` (`filename`, `filepath`, `tag`, `department`, `staffid`,`staffname`, `semester`) VALUES ('".$filename."', '/api/uploads/stucorfiles/".$fileName."','".$tag."','".$department."',".$staffid.",'".$staffname."',".$semester.")";
            mysqli_query($DB, $sql);
            echo json_encode(array("status" => true));
        } else {
            echo json_encode(array("status" => false, "message" => "something went wrong! cannot upload now! try again later!"));
        }
    } elseif ($_POST['method'] === 'delete') {
        $id = $_POST['id'];
        $query = "DELETE FROM tbl_stucorfiles WHERE id=".$id;
    
        if (mysqli_query($DB, $query)) {
            echo json_encode(array("status"=> true));
        } else {
            echo json_encode(array("status"=> false, "message" => "something went wrong! try again later!"));
        }
    }
}


// get all files
// get files based on department
// get files based on staffid
// get files based on tagname
// get files based on semester

if ($_SERVER['REQUEST_METHOD'] == 'GET') {
    $queryString = "select * from tbl_stucorfiles order by id desc";

    $row = mysqli_query($DB, $queryString);

    echo json_encode(mysqli_fetch_all($row));
}

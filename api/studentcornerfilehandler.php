<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, PUT, POST, DELETE");
header("Access-Control-Allow-Headers: *");
header("Content-Type: application/json; charset=UTF-8");
require('./config/dbconfig.php');

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    if ($_POST['method'] === 'upload') {
        $fileName = preg_replace("/[^a-zA-Z0-9.]/", "", $_FILES["file"]["name"]);
        $fileName = time().'_'.$fileName;
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
        $sql = "SELECT `filepath` FROM `tbl_stucorfiles` WHERE id=".$id;
        if ($row = mysqli_query($DB, $sql)) {
            $result = mysqli_fetch_assoc($row);
            $resultSplit = explode("/", $result["filepath"]);
            $fileName = $resultSplit[count($resultSplit) - 1];
            unlink('./uploads/stucorfiles/'.$fileName);
            $query = "DELETE FROM tbl_stucorfiles WHERE id=".$id;
            if (mysqli_query($DB, $query)) {
                echo json_encode(array("response"=> true));
            } else {
                echo json_encode(array("response"=> false));
            }
        } else {
            echo json_encode(array("status"=> false, "message" => "something went wrong! try again later!"));
        }
    } elseif ($_POST['method'] === 'filter') {
        $sql="";
        if ($_POST['filtertype'] === '1') {
            // fetch all files (all dept, all staff, all semester)
            $sql = "SELECT * FROM `tbl_stucorfiles`";
        } elseif ($_POST['filtertype'] === '2') {
            // (one dept, all staff, all semester)
            $department = $_POST['department'];
            $sql = "SELECT * FROM `tbl_stucorfiles` WHERE department='".$department."'";
        } elseif ($_POST['filtertype'] === '3') {
            // (all dept, one staff, all semester)
            $staffid = $_POST['staffid'];
            $sql = "SELECT * FROM `tbl_stucorfiles` WHERE staffid='".$staffid."'";
        } elseif ($_POST['filtertype'] === '4') {
            // (all dept, all staff, one semester)
            $semester = $_POST['semester'];
            $sql = "SELECT * FROM `tbl_stucorfiles` WHERE semester='".$semester."'";
        } elseif ($_POST['filtertype'] === '5') {
            // (one dept, one staff, all semester)
            $department = $_POST['department'];
            $staffid = $_POST['staffid'];
            $sql = "SELECT * FROM `tbl_stucorfiles` WHERE department='".$department."' AND staffid='".$staffid."'";
        } elseif ($_POST['filtertype'] === '6') {
            // (one dept, all staff, one semester)
            $department = $_POST['department'];
            $semester = $_POST['semester'];
            $sql = "SELECT * FROM `tbl_stucorfiles` WHERE department='".$department."' AND semester='".$semester."'";
        } elseif ($_POST['filtertype'] === '7') {
            // (all dept, one staff, one semester)
            $staffid = $_POST['staffid'];
            $semester = $_POST['semester'];
            $sql = "SELECT * FROM `tbl_stucorfiles` WHERE staffid='".$staffid."' AND semester='".$semester."'";
        } elseif ($_POST['filtertype'] === '8') {
            // (one dept, one staff, one semester)
            $department = $_POST['department'];
            $staffid = $_POST['staffid'];
            $semester = $_POST['semester'];
            $sql = "SELECT * FROM `tbl_stucorfiles` WHERE department='".$department."' AND staffid='".$staffid."' AND semester='".$semester."'";
        } elseif ($_POST['filtertype'] === '9') {
            // (one dept, one staff, one semester)
            $tag = $_POST['tag'];
            $sql = "SELECT * FROM `tbl_stucorfiles` WHERE tag='".$tag."'";
        }
        $row = mysqli_query($DB, $sql);
        $result = mysqli_fetch_all($row);
        echo json_encode(array("status" => true, "data" => $result));
    }
}


if ($_SERVER['REQUEST_METHOD'] == 'GET') {
    $sql = "SELECT * from `tbl_stucorfiles`";
    $row = mysqli_query($DB, $sql);
    $staffs = mysqli_fetch_all($row);
    echo json_encode(array("status" => true, "data" => $staffs));
}

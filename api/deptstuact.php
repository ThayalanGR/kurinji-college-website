<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, PUT, POST, DELETE");
header("Access-Control-Allow-Headers: *");
header("Content-Type: application/json; charset=UTF-8");
require('./config/dbconfig.php');


if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    if ($_POST['method'] === 'post') {
        $title = $_POST["title"];
        $body = $_POST["body"];
        $isBodyContainsImage = $_POST["hasImage"];
        $department = $_POST["department"];
        if ($isBodyContainsImage === 'true') {
            $fileName = preg_replace("/[^a-zA-Z0-9.]/", "", $_FILES["file"]["name"]);
            $fileName = time().'_'.$fileName;
            $fileTmpLoc = $_FILES["file"]["tmp_name"]; // File in the PHP tmp folder
            $fileType = $_FILES["file"]["type"]; // The type of file it is
            $fileSize = $_FILES["file"]["size"]; // File size in bytes
            $fileErrorMsg = $_FILES["file"]["error"]; // 0 for false... and 1 for true
            if (!is_dir("./uploads/deptstuact")) {
                mkdir("./uploads/deptstuact");
            }
            if (move_uploaded_file($fileTmpLoc, "./uploads/deptstuact/$fileName")) {
                $sql = "INSERT INTO `tbl_deptstuact` (`title`, `body`, `imagepath`, `dept`) VALUES ('" . $title . "', '" . $body . "','/api/uploads/deptstuact/" . $fileName . "', '" . $department . "')";
                mysqli_query($DB, $sql);
                echo json_encode($sql);
            }
        } else {
            $sql = "INSERT INTO `tbl_deptstuact` (`title`, `body`, `imagepath`, `dept`) VALUES ('" . $title . "', '" . $body . "', 'null', '" . $department . "')";
            mysqli_query($DB, $sql);
            echo json_encode($fileName);
        }
    } elseif ($_POST['method'] === 'delete') {
        $id = $_POST['id'];
        $sql = "SELECT `imagepath` FROM `tbl_deptstuact` WHERE id=".$id;
        if ($row = mysqli_query($DB, $sql)) {
            $result = mysqli_fetch_assoc($row);
            if ($result["imagepath"] !== "null") {
                $resultSplit = explode("/", $result["imagepath"]);
                $fileName = $resultSplit[count($resultSplit) - 1];
                unlink('./uploads/deptstuact/'.$fileName);
            }
            $query = "DELETE FROM tbl_deptstuact WHERE id=".$id;
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
    if (isset($_GET['department'])) {
        $dept = $_GET['department'];
        $queryString = "SELECT * from tbl_deptstuact WHERE dept = '" . $dept . "' ORDER BY id ASC";

        $row = mysqli_query($DB, $queryString);

        echo json_encode(mysqli_fetch_all($row));
    } else {
        $queryString = "SELECT * from tbl_deptstuact ORDER BY id ASC";

        $row = mysqli_query($DB, $queryString);

        echo json_encode(mysqli_fetch_all($row));
    }
}

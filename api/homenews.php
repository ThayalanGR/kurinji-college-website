<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, PUT, POST, DELETE");
header("Access-Control-Allow-Headers: *");
header("Content-Type: application/json; charset=UTF-8");
require('./config/dbconfig.php');


if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $news = $_POST['news'];
    $sql = "INSERT INTO `tbl_news` (`news`) VALUES ('".$news."')";
    if(mysqli_query($DB, $sql)) {
        echo json_encode(array("response" => true));
    } else {
        echo json_encode(array("response" => false));
    }
}

if ($_SERVER['REQUEST_METHOD'] == 'GET') {

    $queryString = "select * from tbl_news order by id desc";

    $row = mysqli_query($DB, $queryString);

    echo json_encode(mysqli_fetch_all($row));
}



if ($_SERVER['REQUEST_METHOD'] == 'DELETE') {

    parse_str(file_get_contents("php://input"),$post_vars);
    
    $id = $post_vars['id'];

    $query = "DELETE FROM tbl_news WHERE id=".$id;

    if(mysqli_query($DB, $query)) {
        echo json_encode(array("response"=> true));
    } else {
        echo json_encode(array("response"=> false));
    }

}

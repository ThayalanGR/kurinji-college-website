<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, PUT, POST, DELETE");
header("Access-Control-Allow-Headers: *");
header("Content-Type: application/json; charset=UTF-8");
require('./config/dbconfig.php');

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    if ($_POST['method'] === 'register') {
        $staffid = $_POST["staffid"];
        $staffname = $_POST["staffname"];
        $email = $_POST["email"];
        $password = md5($_POST["password"]);
        $forgotpassword = md5(uniqid(rand()));
        $mobile = $_POST["mobile"];
        $department = $_POST["department"];
    
        $subQuery = "SELECT * from `tbl_stucorstaffs` WHERE staffid=".$staffid;
        $isExist = mysqli_query($DB, $subQuery);
        if (mysqli_num_rows($isExist) === 0) {
            $sql = "INSERT INTO `tbl_stucorstaffs` (`staffid`, `staffname`, `email`, `password`, `forgotpassword`, `mobile`, `department`) VALUES (".$staffid.",'".$staffname."', '".$email."', '".$password."', '".$forgotpassword."', ".$mobile.", '".$department."')";
            $result = mysqli_query($DB, $sql);
            if ($result) {
                echo json_encode(array("status" => true));
            } else {
                echo json_encode(array("status" => false));
            }
        } else {
            echo json_encode(array("status" => false, "message" => "account already exit! try resetting your password"));
        }
    } elseif ($_POST['method'] === 'login') {
        $staffid = $_POST['staffid'];
        $password = md5($_POST['password']);
        $query = "SELECT `id`, `staffName`, `department`,`active` FROM tbl_stucorstaffs WHERE staffid=".$staffid." AND password='".$password."'";
        $row = mysqli_query($DB, $query);
        if (mysqli_num_rows($row) > 0) {
            $staffDetails = mysqli_fetch_array($row);
            if ($staffDetails['active'] === "1") {
                echo json_encode(array("status"=> true, "staffDetails" => $staffDetails));
            } else {
                echo json_encode(array("status"=> false, "message" => "your account is locked , contact administrator!"));
            }
        } else {
            echo json_encode(array("status"=> false, "message" => "username or password is wrong!"));
        }
    }
}

if ($_SERVER['REQUEST_METHOD'] == 'GET') {
    if (isset($_GET['department'])) {
        $dept = $_GET['department'];
        $queryString = "SELECT * from tbl_stucorstaffs WHERE department = '".$dept."'";
    
        $row = mysqli_query($DB, $queryString);
    
        echo json_encode(mysqli_fetch_all($row));
    } else {
        $queryString = "SELECT * from tbl_stucorstaffs";
    
        $row = mysqli_query($DB, $queryString);
    
        echo json_encode(mysqli_fetch_all($row));
    }
}

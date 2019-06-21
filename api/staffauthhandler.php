<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, PUT, POST, DELETE");
header("Access-Control-Allow-Headers: *");
header("Content-Type: application/json; charset=UTF-8");
require('./config/dbconfig.php');
require("./phpmailer/class.phpmailer.php");

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
        $query = "SELECT `staffid`, `staffname`, `department`,`active` FROM tbl_stucorstaffs WHERE staffid=".$staffid." AND password='".$password."'";
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
    } elseif ($_POST["method"] === "forgot") {
        $staffid = $_POST['staffid'];
        $siteUrl = $_POST['siteurl'];
        $query = "SELECT `forgotpassword`, `staffname`, `staffid`, `email` FROM tbl_stucorstaffs where staffid=".$staffid;
        $result = mysqli_query($DB, $query);
        if (mysqli_num_rows($result) > 0) {
            $staffDetails = mysqli_fetch_array($result);
            $staffName = $staffDetails["staffname"];
            $staffId = $staffDetails["staffid"];
            $email = $staffDetails["email"];
            $forgotpasswordHash =$staffDetails["forgotpassword"];
            $date = date('Y-m-d H:i:s');
            $message = "     
            Hello <b>$staffName</b>,
            <br /><br />
            Greeting!
            <br/>
            <br/>
            Kurinji College of Engineering - STUDENTS CORNER.
            <br/>
            <br/>
            Forgot your password? don't get panic we will help you ! 
            <br />
            <br />
            To change your password, just click the following link<br/>
            <br />
            <u><a href='".$siteUrl."/forgotpasswordhandler/$staffId/$forgotpasswordHash'>CHANGE PASSWORD</a></u>
            <br /><br />
            Thanks,
            <br/>
            <b>KCET-Admin</b><br />
            $date";
            // php mailer code starts
            date_default_timezone_set('Etc/UTC');
            $mail = new PHPMailer(true);
            $mail->IsSMTP(); // telling the class to use SMTP
            $mail->SMTPDebug = 0;                     // enables SMTP debug information (for testing)
            $mail->SMTPAuth = true;                  // enable SMTP authentication
            $mail->SMTPSecure = "ssl";                 // sets the prefix to the servier
            $mail->Host = gethostbyname('ssl://smtp.gmail.com');      // sets GMAIL as the SMTP server
            $mail->Port = 465;                   // set the SMTP port for the GMAIL server
            $mail->Username = 'kcetstudentscorner@gmail.com';
            $mail->Password = 'kcet@123';
            $mail->SetFrom('kcetstudentscorner@gmail.com', 'KCET-Students Corner - Reset Password');
            $mail->AddAddress($email);
            $mail->Subject = trim("Reset Password - KCET-Students Corner");
            $mail->MsgHTML($message);
            try {
                $mail->send();
                echo json_encode(array("status" => true));
            } catch (Exception $ex) {
                $msg = $ex->getMessage();
                echo json_encode(array("status" => false, "message" => "Something went wrong try again later!"));
            }
        } else {
            echo json_encode(array("status" => false, "message" => "account not found!"));
        }
    } elseif ($_POST["method"] === "reset") {
        $staffid=$_POST["staffid"];
        $hash = $_POST["hash"];
        $password = md5($_POST["password"]);
        $subQuery = "SELECT * FROM `tbl_stucorstaffs` WHERE staffid='".$staffid."'";
        if (mysqli_num_rows(mysqli_query($DB, $subQuery))) {
            $query = "UPDATE `tbl_stucorstaffs` SET password='".$password."' WHERE staffid='".$staffid."' AND forgotpassword='".$hash."'";
            if (mysqli_query($DB, $query)) {
                echo json_encode(array("status" => true));
            } else {
                echo json_encode(array("status" => false, "message" => "something went wrong contact administrator"));
            }
        } else {
            echo json_encode(array("status" => false, "message" => "account not found !"));
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

<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, PUT, POST, DELETE");
header("Access-Control-Allow-Headers: *");
header("Content-Type: application/json; charset=UTF-8");
require('./config/dbconfig.php');
require("./phpmailer/class.phpmailer.php");


if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    if ($_POST['method'] === 'register') {
        $studentid = $_POST["studentid"];
        $studentname = $_POST["studentname"];
        $email = $_POST["email"];
        $password = md5($_POST["password"]);
        $forgotpassword = md5(uniqid(rand()));
        $mobile = $_POST["mobile"];
        $department = $_POST["department"];
    
        $subQuery = "SELECT * from `tbl_stucorstudents` WHERE studentid=".$studentid;
        $isExist = mysqli_query($DB, $subQuery);
        if (mysqli_num_rows($isExist) === 0) {
            $sql = "INSERT INTO `tbl_stucorstudents` (`studentid`, `studentname`, `email`, `password`, `forgotpassword`, `mobile`, `department`) VALUES (".$studentid.",'".$studentname."', '".$email."', '".$password."', '".$forgotpassword."', ".$mobile.", '".$department."')";
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
        $studentid = $_POST['studentid'];
        $password = $_POST['password'];
        $query = "SELECT `id`, `studentName`, `department`,`active` FROM tbl_stucorstudents WHERE studentid=".$studentid." AND password='".$password."'";
        $row = mysqli_query($DB, $query);
        if (mysqli_num_rows($row) > 0) {
            $studentDetails = mysqli_fetch_array($row);
            if ($studentDetails['active'] === "1") {
                echo json_encode(array("status"=> true, "studentDetails" => $studentDetails));
            } else {
                echo json_encode(array("status"=> false, "message" => "your account is locked , contact administrator!"));
            }
        } else {
            echo json_encode(array("status"=> false, "message" => "username or password is wrong!"));
        }
    } elseif ($_POST["method"] === "forgot") {
        $studentid = $_POST['studentid'];
        $siteUrl = $_POST['siteurl'];
        $query = "SELECT `forgotpassword`, `studentname`, `studentid`, `email` FROM tbl_stucorstudents where studentid=".$studentid;
        $result = mysqli_query($DB, $query);
        if (mysqli_num_rows($result) > 0) {
            $studentDetails = mysqli_fetch_array($result);
            $studentName = $studentDetails["studentname"];
            $studentId = $studentDetails["studentid"];
            $email = $studentDetails["email"];
            $forgotpasswordHash =$studentDetails["forgotpassword"];
            $date = date('Y-m-d H:i:s');
            $message = "     
            Hello <b>$studentName</b>,
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
            <u><a href='".$siteUrl."/forgotpasswordhandler/$studentId/$forgotpasswordHash'>CHANGE PASSWORD</a></u>
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
        $studentid=$_POST["studentid"];
        $hash = $_POST["hash"];
        $password = md5($_POST["password"]);
        $subQuery = "SELECT * FROM `tbl_stucorstudents` WHERE studentid='".$studentid."'";
        if (mysqli_num_rows(mysqli_query($DB, $subQuery))) {
            $query = "UPDATE `tbl_stucorstudents` SET password='".$password."' WHERE studentid='".$studentid."' AND forgotpassword='".$hash."'";
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
        $queryString = "SELECT * from tbl_stucorstudents WHERE department = '".$dept."'";
    
        $row = mysqli_query($DB, $queryString);
    
        echo json_encode(mysqli_fetch_all($row));
    } else {
        $queryString = "SELECT * from tbl_stucorstudents";
    
        $row = mysqli_query($DB, $queryString);
    
        echo json_encode(mysqli_fetch_all($row));
    }
}

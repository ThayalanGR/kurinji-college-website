<?php

define('DB_NAME', 'epiz_21302258_erp');
define('DB_USER', 'epiz_21302258');
define('DB_PASSWORD', '1018thayalan');
define('DB_HOST', 'sql200.epizy.com');
$DB = mysqli_connect(DB_HOST, DB_USER, DB_PASSWORD, DB_NAME);
// Check connection
if (mysqli_connect_errno()) {
    echo "Failed to connect to MySQL: " . mysqli_connect_error();
}
// else {
//     echo "connection success";
// }
<?php
    $servername='localhost';
    $username='root';
    $password='';
    $database='login';

    $conn=new mysqli($servername,$username,$password,$database);

    if($conn->connect_errno){
        die('连接失败'.$conn->connect_errno);
    }
    $conn->set_charset('utf8');





?>
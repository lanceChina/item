<?php
    include 'connect.php';
    $username=isset($_GET['username']) ? $_GET['username'] : '';
    $password=isset($_GET['password']) ? $_GET['password'] : '';

    $password=md5($password);
    $sql="select * from user where username='$username' and password='$password'";
    $result=$conn->query($sql);
    $row=$result->fetch_row();

    if($row[0]){
        echo 'ok';
    }else{
        echo 'fail';
    }

    $result->free();
    $conn->close();







?>
<?php
    include 'connect.php';

    $username=isset($_GET['username']) ? $_GET['username'] : '';
    $password=isset($_GET['password']) ? $_GET['password'] : '';

    $sql="select username from user where username='$username'";
    $result=$conn->query($sql);

    if($result->num_rows>0){
        $result->free();
        echo "fail";
    }else{
        $result->free();

        $password=md5($password);

        $sql="insert into user(username,password) values('$username','$password')";
        $result =$conn->query($sql);

        if($result){
            echo "ok";
        }else{
            echo "Error:" .$sql . "<br>" . $conn->error;
        }
    }

    $conn->close();


?>
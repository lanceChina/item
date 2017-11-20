<?php
   include 'connect.php';

    $username=isset($_GET['username']) ? $_GET['username'] :'无用户名';
    $password=isset($_GET['password']) ? $_GET['password'] :'无密码';
   
    $sql="select username from user where username='$username'";
    $result=$conn->query($sql);

    if($result->num_rows>0){
        $result->free();
        //用户名已经存在
        echo "fail";
    }else{
       $result->free();
        //不存在则写入数据库
        // $password=md5($password);//对密码加密

        // $sql="insert into user(username,password) values('$username','$password')";

        // $result =$conn->query($sql);
        // //判断是否写入成功
        // if($result){
        //     echo "ok";//写入成功
        // }else{
        //     echo "Error:" .$sql . "<br>" . $conn->error;//写入失败
        // }
        $sql="insert into user(username,password) values ('$username','$password')";
        $result=$conn->query($sql);
        if($result){
            echo "ok";
        }else{
            echo "Error:" .$sql . "<br>" . $conn->error;
        }
    }


    $conn->close();

    
?>
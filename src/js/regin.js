jQuery(function($){
//登入页面，注册方式切换
//
    var $reg=$('.regin');
    var $span=$('.lab');
    var $c1=$('.regin .v1');//console.log($c1);

    $span.find('span').first().addClass('grr');
    $reg.on('mouseover','.lab span',function(){
        var idx=$(this).index();
        $(this).addClass('grr').siblings().removeClass('grr');
        $c1.eq(idx).fadeIn().siblings('.v1').fadeOut();
    });

    //登入验证
    
    var $username=$('.user');
    var $password=$('.psw');
    var $regins=$('.regins');
    $regins.on('click',function(){
        username=$username.get(0).value;
        password=$password.get(0).value;
        console.log(username,password);
        var xhr=new XMLHttpRequest();
        xhr.onreadystatechange=function(){
            if(xhr.readyState==4 && (xhr.status==200 || xhr.status==304)){
                var res=xhr.responseText;
                console.log(res);
            }

        }
        xhr.open('get','../api/regin.php?username='+username+'&password='+password,true);
        xhr.send();

    });




});
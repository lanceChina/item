jQuery(function($){
    var $phone=$('.p_num');
    var $yzm=$('.yzm');
    var $e_yzm=$('.e_yzm');
    var $sz_psw=$('.sz_psw');
    var $c_regin=$('.c_regin');
    var $ts=$('.ts');

    
    var $hm=$('.hm');
    var sure_phone;
    var phone;
    $phone.on('blur',function(){
        //验证用户名是否正确
        //
        phone=$('.p_num').val();
        console.log(phone);
        var phone_num=/^1[34578]\d{2}$/g;
        if(phone.trim()==''){
            $hm.html('手机号码不能为空');
            $hm.addClass('fail');
            sure_phone=false;
        }else if(!phone_num.test(phone)){
            $hm.html('手机号码格式不正确');
            $hm.addClass('fail');
            sure_phone=false;
        }else{
            //用户名发起ajax
            $hm.html('');
            $hm.removeClass('fail');
            sure_phone=true;
            // var xhr=new XMLHttpRequest();
            // xhr.onreadystatechange=function(){
            //     if(xhr.readyState==4 && (xhr.status==200 || xhr.status==304)){
            //         var res=xhr.responseText;
            //         if(res=='fail'){
            //             $hm.html('用户名已经存在');
            //             $hm.addClass('fail');
            //         }else{
            //             sure_phone=true;
            //         }
            //     }
            // }
            // xhr.open('get','../api/reg.php?username='+phone,true);
            // xhr.send();
            //console.log(phone);
        }
    });

    //验证码
    var sure_yzm;
    var $yzm=$('.vCode');
    var sj_yzm=vCode();//生成随机验证码
    $yzm.html(sj_yzm);//写入随机验证码
    var $e_yzm=$('.e_yzm');
    var $yzm2=$('.yzm');
    $yzm2.on('blur',function(){
        if($yzm2.val()!=sj_yzm){
            $hm.html('验证码输入错误');
            $hm.addClass('fail');
            sure_yzm=false;
        }else{
            $hm.html('');
            sure_yzm=true;
        } 
    });
   
    //设置密码,并且对密码格式进行验证
    var $sz_psw=$('.sz_psw');
    var sure_psw;
    var reg_psw=/^[a-z\d]{6,15}$/g;
    var psw_val;
    $sz_psw.on('blur',function(){
        psw_val=$sz_psw.val();
        console.log(psw_val);
        if(!reg_psw.test(psw_val)){
            $hm.html('密码格式错误');
            $hm.addClass('fail');
            sure_psw=false;
        }else{
            $hm.html('');
            $hm.removeClass('fail');
            sure_psw=true;
        } 
    });
    //点击立即注册，验证注册
    var $c_regin=$('.c_regin');
    $c_regin.on('click',function(){
        //console.log(phone,psw_val)
        if($('.xyi').prop('checked')==false){
            alert('请选择协议！');
            return;
        }else if(sure_phone==true && sure_psw==true && sure_yzm==true && $('.xyi').prop('checked')==true){
            var xhr=new XMLHttpRequest();
            xhr.onreadystatechange=function(){
                if(xhr.readyState==4 && (xhr.status==200 || xhr.status==304)){
                    var res=xhr.responseText;
                    if(res=='fail'){
                        console.log(res);
                        alert('用户名已存在');
                        //alert('注册成功！'); 
                    }else if(res=='ok'){
                        alert('注册成功');
                    }
                }
            }
            xhr.open('get','../api/reg.php?username='+phone+'&password='+psw_val,true);
            xhr.send();
            
            //location.href="../index.html";
        }

    });

    
});
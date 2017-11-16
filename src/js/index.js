document.addEventListener('DOMContentLoaded',function(){
    jQuery(function($){
        //轮播图
        var $mena=$('#mean');
        var $lbt=$('.lbt');
        var $links=$('.lbt a');
        var $len=$links.length;
        var $idx=0;
        var $lastIdx=0;
        for(var $i=0;$i<$len;$i++){
            if($i==$idx){
                continue;
            }
            $links[$i].style.opacity=0;
        }
        var $timer=setInterval(function(){
            $idx++;
            if($idx==0){
                $('#out').css('backgroundColor','rgb(132,19,215)');  
            }else if($idx==1){
                $('#out').css('backgroundColor','rgb(123,28,170)');
            }else if($idx==2){
                $('#out').css('backgroundColor','rgb(249,115,55)');
            }else if($idx==3){
                $('#out').css('backgroundColor','rgb(255,136,34)');
            }else if($idx==4){
                $('#out').css('backgroundColor','rgb(64,61,192)');
            }else if($idx==5){
                $('#out').css('backgroundColor','rgb(235,27,126)');
            }else if($idx==6){
                $('#out').css('backgroundColor','rgb(15,119,230)');
            }else if($idx==7){
                $('#out').css('backgroundColor','rgb(198,14,2)');
            }
            show();
        },3000);
        function show(){
            if($idx>=$len){
                $idx=0;
            }else if($idx<0){
                $idx=$len-1;
            }
            animate($links[$idx],{opacity:1});
            animate($links[$lastIdx],{opacity:0});
            $lastIdx=$idx;
        }
    
    //--------------nTop---------------
    //


// tab切换
// 
    var $tb=$('.ntop3');
    var $divs=$tb.find('div');
    var $lks=$tb.find('p');

    $lks.slice(1).hide();
    $divs.first().addClass('active');

    $tb.on('mouseenter','div',function(){
        var idx=$(this).index();
        $(this).addClass('active').siblings('div').removeClass('active');
        $lks.eq(idx).show().siblings('p').hide();
    });
    

    // ============首页轮播图下面上下切换===========
    
    var $tb2=$('#tba2');
    var $tb_item=$('.tba_2');
    var $tb_div=$('#tba2').find('div');
    //console.log($tb2,$tb_item,$tb_div);
    $tb_item.find('li').first().addClass('tb_1');
    $('.tba_2').find('li').last().addClass('tb_2');
    $tb2.on('mouseover','.tba_2 li',function(){
        var idx=$(this).index();
        if(idx==0){
            $(this).removeClass('tb_3').siblings('li').removeClass('tb_4');
            $(this).addClass('tb_1').siblings('li').addClass('tb_2');
            $tb2.find('div').first().show().siblings('div').hide();
        }else if(idx==1){
            $(this).addClass('tb_4').siblings('li').addClass('tb_3');
            $tb2.find('div').last().show().siblings('div').hide();
        }
    });
        
// ============左右切换轮播图===========
//
    var f1_top=document.querySelector('.f1_left_top');
    var len=f1_top.children.length;
    var f1_idx=0;

    var page=document.createElement('div');
    page.className='page';

    for(var i=0;i<len;i++){
        var span =document.createElement('span');
        if(i==f1_idx){
            span.className='active';
        }
        page.appendChild(span);
    }
    f1_top.appendChild(page);


    var outTimer=setInterval(function(){
        var target;
        f1_idx++;
        if(f1_idx>1){
            f1_idx=0;
        }
        if(f1_idx==1){
            target=-210;
            idx=-1;
        }else if(f1_idx==0){
            target=0;
            f1_idx=0;
        }
            
        //console.log(f1_idx)
        animate(f1_top,{left:target});
        for(var i=0;i<2;i++){
            page.children[i].className='';
        }
        if(f1_idx==0){
            page.children[0].className='active';
        }else{
            page.children[1].className='active';
        }
        
    },2000);
//================F1商品传参==========
    var f1_rt=document.querySelector('.f1_rt');
    var carlist=[];console.log(carlist);
    var cookies = document.cookie;
        if(cookies.length>0){
            cookies = cookies.split('; ');
            cookies.forEach(function(cookie){
                var temp = cookie.split('=');
                if(temp[0] === 'carlist'){
                    carlist = JSON.parse(temp[1]);//console.log(carlist)
                }
            })
        }
    for(var i=0;i<f1_rt.children.length;i++){
       f1_rt.children[i].onclick=function(e){
            var target=e.target;//console.log(target)
            if(target.tagName.toLowerCase()=='img' || target.tagName.toLowerCase()=='span'){
                var current_div=target.parentNode;
                var div_child=current_div.children;
                var guid=current_div.getAttribute('data-guid');
                var current_floor=current_div.parentNode;
                console.log(target);
                var has=false;
                if(!has){
                    var goods={
                        imgurl:div_child[0].src,
                        price:div_child[1].innerText,
                        title:div_child[2].innerText,
                        save:div_child[3].innerText,
                        id:guid

                    }
                    carlist.push(goods);
                }
                
                document.cookie='carlist='+JSON.stringify(carlist);
                location.href="html/details.html";
            }
            e.preventDefault();
       }
    }            

// ========店铺介绍=======
     var $dpu=$('#dpu');
     var $map_li=$('.dp li');
     var $map_img=$('.m1 div');
     var $mains=$('.mains');
     //console.log($dpu,$map_li,$map_img);
     //$map_img.slice(1).hide();
     $mains.first().show().siblings('.mains').hide();
     $map_li.first().addClass('gl');
     
    $dpu.on('mouseover','.dp li',function(){
        var idx=$(this).index();
        $(this).addClass('gl').siblings('li').removeClass();
        $mains.eq(idx).show().siblings('.mains').hide();
    });


        //内部地图
        //
    
    var $map=$('.map');
    var $m1=$('.m1');
    var $map1=$('.map_1');
    $map1.find('li').first().addClass('ft');
    $map1.find('li').last().addClass('lt');

    // $map1.find('li').first().addClass('ft1');
    // $map1.find('li').last().addClass('lt1');
    $map.on('mouseover','.map_1 li',function(){
        $idx=$(this).index();
        console.log($idx);
        if($idx==0){
            $(this).removeClass('ft1').siblings('li').removeClass('lt1');
            $(this).addClass('ft').siblings('li').addClass('lt');
            $m1.find('div').first().show().siblings('div').hide();
        }else if($idx==1){
            $(this).addClass('lt1').siblings('li').addClass('ft1');
            $m1.find('div').last().show().siblings('div').hide();
        }

    });




    });
});
jQuery(function($){
    var details=document.querySelector('#details');
    var cookies=document.cookie;
    var carlist=[];
    if(cookies.length>0){
        cookies=cookies.split('; ');
        cookies.forEach(function(item){
            var temp=item.split('=');
            if(temp[0]=='carlist'){
                carlist=JSON.parse(temp[1]);
                carlist=carlist.slice(-1);
            }
        });
    }


    var dtu=document.createElement('div');
    dtu.className="dtu";
    dtu.innerHTML=carlist.map(function(item){
        return `
                <div class="dt" data-guid="${item.id}">
                    <img src='${item.imgurl}'/>
                    <div class="lbt">
                        <img src="../img/m31.bmp" class="b_left"/>
                        <img src='${item.imgurl}'/>
                        <img src='${item.imgurl}'/>
                        <img src="../img/m32.bmp" class="b_right"/>
                    </div>
                </div>
                <div class="dt_rt">
                    <p class="det">${item.title}</p>
                    <p class="gud_de">
                        HAN MEGA-TR钛塑近视眼镜架-亮黑(HD3101-F02) HAN MEGA-TR钛塑近视眼镜架-亮黑
                    </p>
                    <p class="pric"><span>可得价:</span>${item.price}<i>${item.save}</i></p>
                    <p class="de"><span>促销信息：</span>无</p>
                    <p class="gos">商品编号:<span>${item.id}</span>库存状况:<i>有货</i></p>
                    <p class="sx s1">
                        属性选择:<span class="p1">右眼R</span>
                        光度：<span class="p2 xz1">请选择:</span><span class="p3 p4">.</span>
                        数量: <s class="j1">-</s><input type="text" class="numb1"/><s class="jia1">+</s>
                    </p>
                    <p class="sx s2">
                        <span class="p1">左眼L</span>
                        光度：<span class="p2 xz2">请选择:</span><span class="p3 p5">.</span>
                        数量: <s class="j2">-</s><input type="text" class="numb2"/><s class="jia2">+</s>
                    </p>
                    <p class="gwc">
                        <span class='sp1'>立即购买</span>
                        <span class="sp2">加入购物车</span>
                    </p>
                    <p class="ser">服务承诺:
                        <span><s class="s5"></s>正品保障</span>
                        <span><s class="s2"></s>货到付款</span>
                        <span><s class="s3"></s>30天随心退换</span>
                        <span><s class="s4"></s>满80免运费</span>
                    </p>
                    <div class="list1">
                        <span>请选择</span>
                        <span>1</span> 
                        <span>2</span> 
                        <span>3</span> 
                        <span>4</span> 
                        <span>5</span> 
                        <span>6</span> 
                        <span>7</span> 
                        <span>8</span> 
                        <span>9</span> 
                        <span>10</span> 
                        <span>11</span> 
                        <span>12</span> 
                        <span>13</span>
                        <span>14</span> 
                        <span>15</span> 
                        <span>16</span> 
                        <span>17</span> 
                        <span>18</span> 
                        <span>19</span> 
                        <span>20</span> 
                        <span>21</span> 
                        <span>22</span> 
                        <span>23</span> 
                        <span>24</span> 
                        <span>25</span> 
                        <span>26</span>
                        <span>27</span>
                    </div>
                    <div class="list2">
                        <span>请选择</span>
                        <span>1</span> 
                        <span>2</span> 
                        <span>3</span> 
                        <span>4</span> 
                        <span>5</span> 
                        <span>6</span> 
                        <span>7</span> 
                        <span>8</span> 
                        <span>9</span> 
                        <span>10</span> 
                        <span>11</span> 
                        <span>12</span> 
                        <span>13</span>
                        <span>14</span> 
                        <span>15</span> 
                        <span>16</span> 
                        <span>17</span> 
                        <span>18</span> 
                        <span>19</span> 
                        <span>20</span> 
                        <span>21</span> 
                        <span>22</span> 
                        <span>23</span> 
                        <span>24</span> 
                        <span>25</span> 
                        <span>26</span>
                        <span>27</span>
                    </div>
                </div>
        `;
    }).join('');
    details.innerHTML='';
    details.appendChild(dtu);
    //加入购物车效果
    var $numb1=$('.numb1');
    var $numb2=$('.numb2');
    var $sCar=$('.sp2');
    $sCar.on('click',function(){
        var $numb1_val=$numb1.val();
        var $numb2_val=$numb2.val();
       

    });
   

    //设置样式
    $('.list1').css({
        overflow:'hidden',
        width:'340px',
        height:'140px',
        border:'1px solid #ccc',
        position:'absolute',
        left:190,
        top:370,
        background:'#fff',
        display:'none'

    });
    $('.list2').css({
        overflow:'hidden',
        width:'340px',
        height:'140px',
        border:'1px solid #ccc',
        position:'absolute',
        left:189,
        top:415,
        background:'#fff',
        display:'none'

    });
    $('.list1').find('span').css({
        display:'block',
        float:'left',
        width:42,
        height:28,
        lineHeight:'28px',
        textAlign:'center',
        border:'1px solid #ccc',
        margin:2
    });
    $('.list2').find('span').css({
        display:'block',
        float:'left',
        width:42,
        height:28,
        lineHeight:'28px',
        textAlign:'center',
        border:'1px solid #ccc',
        margin:2
    });
//点击显示选择尺寸列表
//
    $('.p4').on('click',function(){
        $('.list1').slideDown();
    });
    $('body').on('click',function(){
        $('.list1').slideUp();
    });
    $('.p4').on('click',function(e){
        e.stopPropagation();
    });

     $('.p5').on('click',function(){
        $('.list2').slideDown();
    });
    $('body').on('click',function(){
        $('.list2').slideUp();
    });
    $('.p5').on('click',function(e){
        e.stopPropagation();
    });
//度数选择效果
    $('.list1').find('span').on('mouseover',function(){
        $(this).css('borderColor','#f00');
    }).on('mouseout',function(){
        $(this).css('borderColor','#ccc');
    });

    $('.list2').find('span').on('mouseover',function(){
        $(this).css('borderColor','#f00');
    }).on('mouseout',function(){
        $(this).css('borderColor','#ccc');
    });
//选择好度数后，隐藏列表，同时将内容显示到显示栏中
//事件委托
    //(1) 列表1的选择
    $('.list1').find('span').on('click',function(){
        var $txt=$(this).html();
        $('.xz1').html($txt);
    });
    //(1) 列表2的选择
    $('.list2').find('span').on('click',function(){
        var $txt=$(this).html();
        $('.xz2').html($txt);
    });
    //(2)数量加或减
    var $put1=$('.numb1');
    var $put2=$('.numb2');
    //console.log($put1,$put2);
    var $j1=$('.j1');
    var $jia1=$('.jia1');
    var $j2=$('.j2');
    var $jia2=$('.jia2');
        //up
        $j1.on('click',function(e){
            var $val=$put1.get(0).value--;
            if($val<=0){
                $('.numb1').get(0).value=0;
                return false;
            }

        });
        $jia1.on('click',function(){
            $put1.get(0).value++;
        });
        //down
        $j2.on('click',function(){
            var $val_2=$put2.get(0).value--;
            if($val_2<=0){
                $('.numb2').get(0).value=0;
                return;
            }
        });
        $jia2.on('click',function(){
            var $val_2=$put2.get(0).value++;
        });

        
//加入购物车
    var $fix=$('#fix');
    var $img_all=$fix.find('div img').next('img').hide();
    $fix.children('div').on('mouseover',function(){
        $(this).find('img').first().hide().siblings('img').show();
        $(this).css({
            backgroundColor:'#99CC00',
        });
        $(this).find('p').css('color','#fff');
    }).on('mouseleave',function(){
        $(this).find('img').first().show().siblings('img').hide();
        $(this).css('backgroundColor','#fff');
        $(this).find('p').css('color','black');
    });
    //=============返回顶部效果
    var $top=$('.toTop');
    window.onscroll=function(){
        var totop=window.scrollY;
        if(totop>=500){
            //$top.css('display','block
            $top.fadeIn();                 
        }else{
            //$top.css('display','none');
            $top.fadeOut();
        }
    }
    $top.on('click',function(){
        var $speed=10;
        var $timer=setInterval(function(){
            var $hight=window.scrollY;
            var $speed=Math.ceil($hight/10);
            $hight-=$speed;
            if($hight<=0){
                clearInterval($timer);
                $hight=0;
            }
            window.scrollTo(0,$hight);
        },30);
    });

    


});
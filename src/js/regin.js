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
});
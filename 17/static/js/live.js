$(function(){
    $('.l_menu_btns').click(function(){
        var id = $(this).attr('id');
        if(id == '1'){
            $('.l_video').html('<iframe allowfullscreen="true" id="platform_iframe_head" name="platform_iframe_head" scrolling="no" src="http://tieba.baidu.com/starshow/5000012" style="overflow: hidden;position:relative;" frameborder="no" height="630" width="980"></iframe>');
        }else if(id == '2'){
            $('.l_video').html('<embed allownetworking="all" allowscriptaccess="always" src="http://staticlive.douyutv.com/common/share/play.swf?room_id=56229" quality="high" bgcolor="#000" wmode="window" allowfullscreen="true" allowfullscreeninteractive="true" type="application/x-shockwave-flash" height="630" width="1000">');
        }
    });
})
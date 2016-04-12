/**
 * Created by jac on 16/4/12.
 */
$(function(){
    /*nav animate*/
    $("#nav li").hover(function(){

        $("#nav li .border").hide().css("bottom","-6px");
        $(this).find(".border").show().animate({bottom:"0px"},300);

    },function(){});
});
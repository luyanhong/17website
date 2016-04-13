/**
 * Created by jac on 16/4/12.
 */
$(function(){
    /*nav animate*/
    $("#nav li").hover(function(){
        //$("#nav li .border:not(.active)").hide().css("bottom","-6px");
        $(this).find(".border:not(.active)").show().animate({bottom:"0px"},300);

    },function(){
	//$("#nav li .border:not(.active)").hide().css("bottom","0px");
	$(this).find(".border:not(.active)").show().animate({bottom:"-6px"},300);
    });
});
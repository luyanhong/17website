/**
 * Created by jac on 16/4/11.
 */
var Index = {};

$(function () {
    $("#index .border").show();
    Index.bindEvent();
});

Index.bindEvent = function(){

    /*nav animate*/
    $("#nav li").hover(function(){
        $("#nav li .border").hide();
        $(this).find(".border").show().animate({bottom:"0px"},300);
    });

};
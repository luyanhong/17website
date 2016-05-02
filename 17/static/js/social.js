/**
 * Created by jac on 16/5/1.
 */
$(function () {
    Social.getList(1,1);
});

var Social = {};

Social.getList = function(_pageNo,_type){
    //组装数据
    var opt = {
        url:"http://www.gsq17.com/index.php?m=content&c=index&a=new_social_data&type=1&pageNo=1",
        data:{
            pageNo : _pageNo,
            type : _type, //(Ins:1,微博:2)
        },
        isToken:false,
    };
    //ajax请求
    JAC.ajax.get(opt,getList);
    //JAC.url
    function getList (json){

        console.log(json);
        if(json != null){
            Social.show(json);
        }
    };
};

Social.show = function(json){
    var row_str = '<div class="content_block">'+
        '<div class="content_head">'+
        '<span class="s_type">{{0}}</span>&nbsp;&nbsp;|&nbsp;&nbsp;'+
        '<span class="s_date">{{1}}</span>'+
        '</div>'+
        '<div class="page">{{2}}</div>'+
        '<div class="page_img">{{3}}</div>'+
        '</div>';

    var row = "";
    for(var i in json){
        var n = json[i];
        var type = n.type;
        var date = n.date;
        var content = n.content;
        var img = n.pics;
        var img_src = '<img src="{{0}}">';
        var img_big = "";
        for(var j in img){
            var src = img[j];
            img_big += img_src.format([src]);
        }

        row += row_str.format([type,date,content,img_big]);
    }
    $(".content_body").html(row);
};
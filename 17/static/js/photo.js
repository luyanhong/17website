/**
 * Created by jac on 16/4/13.
 */
Photo = {};

function UrlGetData(name) {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)","i");
    var r = window.location.search.substr(1).match(reg);
    if (r!=null) return (r[2]); return null;
}

$(function(){
    Photo.getPhoto(1,UrlGetData('type'));
    Photo.bindEvent();
});

Photo.getPhoto = function(_pageNo,_type){
    //组装数据
    var opt = {
        url:"http://gsq17.com/index.php?m=content&c=index&a=new_picture_data",
        data:{
            pageNo : _pageNo,
            type : _type,
        },
        isToken:false,
    };
    //ajax请求
    JAC.ajax.get(opt,getList);
    JAC.url
    function getList (json){

        console.log(json);
        if(json.info.list.length == 0){
            //$("#more").hide();
            return;
        }
        Photo.showList(json.info);
    };
};

Photo.showList = function(data){
    var list = data.list;
    Photo.count = data.count;
    Photo.pageNo = data.pageNo;

    var row_str = "<div class='photo_big'>"+
                    "<div class='photo_block'>"+
                    "<img src='{{0}}'>"+
                    "<p class='author'>by{{1}}</p>"+
                    "</div>"+
                  "</div>";

    var row = "";
    for(var i in list){
        var n = list[i];
        var author = n.author;
        var url = n.url;

        row += row_str.format([url,author]);
    }
    $("#photo_body").html(row);
};

Photo.bindEvent = function(){
    $(".prev").on("click",function(){
        if(Photo.pageNo == 1){
            alert("已经到第一页了!")
            return;
        }
        Photo.pageNo--;
        Photo.getPhoto(Photo.pageNo,UrlGetData('type'));
    });
    $(".next").on("click",function(){
        if(Photo.count < 12){
            alert("已经到第最后一页了!")
            return;
        }
        Photo.pageNo++;
        Photo.getPhoto(Photo.pageNo,UrlGetData('type'));
    });
};
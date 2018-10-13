$(document).ready(function () {
    $(".button").on("click",function(){
        $.getJSON(" https://v1.hitokoto.cn/",function(json){
            var word = json["hitokoto"];
            var from = json["from"];
            $(".word").animate({
                    opacity: 0
                }, 500,
                function() {
                    $(this).animate({
                        opacity: 1
                    }, 500);
                    $(".word").html(word);
                });
            $(".from").animate({
                    opacity: 0
                }, 500,
                function() {
                    $(this).animate({
                        opacity: 1
                    }, 500);
                    $(".from").html("——"+from);
                });
        });

    });
    $(".weibo").on("click",function(){
        window.open('http://service.weibo.com/share/share.php?url=http://www.baidu.com&desc='+word+'——'+from+'&title=一言&summary=来自一言的一句话  分享给大家&pics=&site=bshare')
    });
    $(".qq").on("click",function(){
        window.open('http://sns.qzone.qq.com/cgi-bin/qzshare/cgi_qzshare_onekey?url=http://www.baidu.com&desc='+word+'——'+from+'&title=一言&summary=来自一言的一句话  分享给大家&pics=&site=bshare');
    });
    $(".twitter").on("click",function(){
        window.open('http://twitter.com/home/?status='.concat(encodeURIComponent(document.title)) .concat(' ') .concat(encodeURIComponent(location.href)))
    });

});
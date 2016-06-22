$(function(){
    $(".btn_hd").on("click",hdDialog);
    $(".btn_share").on("click",function(){
        $("#meiriq-share").css({"opacity":1,"display":"block"});
    });
    $(".btn_close").on("click",function(){
        $(".banner").css({"opacity":0,"display":"none"});
    });
    $("#meiriq-share").on("click",function(){
        $("#meiriq-share").css({"opacity":0,"display":"none"});
    });
});
function hdDialog(){
    TINY.box.show({
        html:'<div class="box-title"></div><div class="box-content"><p class="t">论坛晒图赢千元甜蜜大礼包</p><div class="detail"><p>活动时间： 即日起至2015年5月21日</p><p>活动内容：</br>玩家挑战《情侣版2048》，修炼恋爱技能，合成“接吻”及以上，在论坛活动贴中回帖并附上游戏截图或者将游戏分享到朋友圈的截图就有机会获得100元京东卡、格瓦拉电影券，合成“相濡以沫”并将通关截图回帖还有机会获得价值1000元的超值暖心大礼包。</p><p>活动奖励：</br>特等奖1位：价值千元暖心大礼包</br>一等奖10位：100元京东卡1张</br>二等奖50位：10元格瓦拉电影券2张</p><a href="http://bbs.play.cn/thread-59785-1-1.html" class="link">查看活动详情>></a><p>本游戏由每日Q游戏友情提供</p></div></div>',
        close: true,
        boxid:"success",
        width:268,
       /* height:340,*/
        animate:false,
        openjs: function(){
        },
        fixed:false
    });

}
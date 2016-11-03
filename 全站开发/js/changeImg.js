/**
 * Created by acer on 2016/11/2.
 */
$(function(){
    var now=0;
    var $img=$("#content");
    $("#next").on("click",function(){
       now++;
        if(now==$("#content img").size()){
            now=0;
        }
       $img.animate({
           left:-$("#content img").eq(0).width()*now
       });
    });
    $("#prev").on("click",function(){
        now--;
        if(now<0){
            now=$("#content img").size()-1;
        }
        $img.animate({
            left:-$("#content img").eq(0).width()*now
        });
    });
    var timer=setInterval(function(){
       $("#next").click();
    },1000);
    $("#container").on("mouseover",function(){
        clearInterval(timer);
    }).on("mouseout",function(){
        timer=setInterval(function(){
            $("#next").click();
        },1000)
    });
    });
//ÂÖ²¥Í¼¡£

$(function(){
    var inow=0;
    var $ul=$("#LB");
    $("#after").on("click",function(){
        inow++;
        if(inow==$("#LB img").size()){
            inow=0;
        }
        $ul.animate({
            left:-$("#LB img").eq(0).width()*inow
        });
    });
    $("#before").on("click",function(){
        inow--;
        if(inow<0){
            inow=$("#LB img").size()-1;
        }
        $ul.animate({
            left:-$("#LB img").eq(0).width()*inow
        });
    });
});
//clientsÂÖ²¥
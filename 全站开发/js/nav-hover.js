/**
 * Created by acer on 2016/11/2.
 */
$(function(){
    $("#nav a").hover(function(){
        $(this).addClass("selected");
    },function(){
        $(this).removeClass("selected")
    })
})
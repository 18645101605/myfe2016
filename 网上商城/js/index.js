/**
 * Created by acer on 2016/11/7.
 */
//������
$(function(){
    $("#search input").on("focus",function(){
        if(this.value==this.defaultValue){
            this.value='';
        }
    }).on("blur",function(){
        if(this.value==''){
            this.value=this.defaultValue;
        }
    }).on("keydown",function(e){
        if(e.keyCode==13){
            alert("hahaha");
        }
    })
});
//main-nav��ɫ
$(function(){
    $('#skin li').on('click',function(){
        $(this).addClass('select'+$(this).index()).siblings().removeClass();
        $('#main-nav').removeClass().addClass('bg'+$(this).index())
        //console.log($(this).index())
    });
});
//main-nav�༶�����˵�
$(function(){
    $(".nav li").hover(function(){
            $(this).find(".jnNav").show();
    },function(){
            $(this).find(".jnNav").hide();
    });
});
//���뵭���ֲ�ͼ
$(function(){
    var timer;
    var index=0;
    var a=5;
    function changImg(idx){
        a++;
        $('#b-span li').eq(idx).addClass('change-col').siblings().removeClass('change-col');
        $('#roll-cont img').eq(idx).css('z-index',a).css('opacity',0).stop().animate({
        opacity:1
    },1000);
}
    $('#b-span li').on('mouseover',function(){
        $index = $(this).index();
        changImg($index)
    });
    function run(){
        timer = setInterval(function(){
            index++;
            if(index==5){
                index = 0;
            }
            changImg(index);
        },3000);
    }
    $('#roll-cont').hover(function(){
        clearInterval(timer);
    },function(){
        run();
    });
    run();
    });
//�ײ����
$(function(){
    var $li=$("#option li");
    var $index=0;
    $li.on('mouseover',function(){
        $(this).addClass('selected').siblings().removeClass();
        $index=$(this).index();
        $('#img').stop().animate({left:-$index*791})
    }).on('mouseleave',function(){
        $(this).removeClass('selected')
    });
    });
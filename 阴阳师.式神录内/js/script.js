/**
 * Created by Administrator on 2018/10/10.
 */
$('#nav').hide(0);
$(window).scroll(function () {
    console.log($(this.document).scrollTop());
    if ($(document).scrollTop() < 500) {
        $('#nav').hide(0);
    } else if($(this.document).scrollTop()<754){
        console.log($('#nav').find('i'));
        $('#nav').show(0);
        $('#nav').find('i').attr('style','')
        $('#nav').find('i').eq(0).attr('style','display:block')
    }else if($(this.document).scrollTop()<1321){
        $('#nav').show(0);
        $('#nav').find('i').attr('style','')
        $('#nav').find('i').eq(1).attr('style','display:block')
    }else if($(this.document).scrollTop()<2134){
        $('#nav').show(0);
        $('#nav').find('i').attr('style','')
        $('#nav').find('i').eq(2).attr('style','display:block')
    }else if($(this.document).scrollTop()<2819){
        $('#nav').show(0);
        $('#nav').find('i').attr('style','')
        $('#nav').find('i').eq(3).attr('style','display:block')
    }else if($(this.document).scrollTop()<3251){
        $('#nav').show(0);
        $('#nav').find('i').attr('style','')
        $('#nav').find('i').eq(4).attr('style','display:block')
    }else if($(this.document).scrollTop()<3879){
        $('#nav').show(0);
        $('#nav').find('i').attr('style','')
        $('#nav').find('i').eq(5).attr('style','display:block')
    }
    else if($(this.document).scrollTop()<3879){
        $('#nav').show(0);
        $('#nav').find('i').attr('style','')
        $('#nav').find('i').eq(6).attr('style','display:block')
    }else{
        $('#nav').show(0);
        $('#nav').find('i').attr('style','')
        $('#nav').find('i').eq(6).attr('style','display:block')
    }
});
//点击切换事件

$('#content_btn1').click(function () {
    $('.content_img1').show().siblings().hide();
    $('#content_btn1').addClass('sw1').find('i').addClass('show');
    $('#content_btn2').removeClass('sw2').find('i').removeClass('show');
});
$('#content_btn2').click(function () {
    $('.content_img2').show().siblings().hide();
    $('#content_btn1').removeClass('sw1').find('i').removeClass('show');
    $('#content_btn2').addClass('sw2').find('i').addClass('show');

});
//轮播图
var index=0
$('.next').click(function(){
    index+=1;
    if(index==5){
        index=0
    }
    var left=index*144
    console.log($('.pic_btn_container'));
    $('.pic_btn_container').animate({left:'-'+left+'px'})
})
$('.prev').click(function(){
    index-=1;
    if(index<0){
        index=0
    }
    var left=index*144
    console.log($('.pic_btn_container'));
    $('.pic_btn_container').animate({left:'-'+left+'px'})
});


$('.skill_item1').mouseover(function(){
    $('.skill_info1').css('display','block');
});
$('.skill_item1').mouseout(function(){
    $('.skill_info1').css('display','none');
});
$('.skill_item2').mouseover(function(){
    $('.skill_info2').css('display','block');
});
$('.skill_item2').mouseout(function(){
    $('.skill_info2').css('display','none');
});
$('.skill_item3').mouseover(function(){
    $('.skill_info3').css('display','block');
});
$('.skill_item3').mouseout(function(){
    $('.skill_info3').css('display','none');
});
$('.btn-music>span').click(function () {
    if ($('#music2')[0].paused) {
        $('#music2')[0].play();
        $('.btn-music').find('i').css('animation-play-state', 'running')
    } else {
        $('#music2')[0].pause();
        $('.btn-music').find('i').css('animation-play-state', 'paused')
    }
})

$(function(){
    // $('body').toggleClass('loaded');
   // $(document).ready(function() {
   setTimeout(function(){
        $('body').addClass('loaded');
        $('h1').css('color','#222222');
    }, 2500); 
    $(".jump").qin({
        offset:22, // default , 最大偏移量
        duration:500, // default , 晃动时间
        recline:0.1 // default , 每像素偏移量，越小“琴弦绷的越紧”
    });    
   // });
   //$('.drop-toggle').dropdown();
   // console.log($(".nav-item").find(".selected"));
    $(".nav-item").on('click',function(){
       $(this).addClass('selected').siblings().removeClass('selected');
       navIndex = $(this).index();
       $($(".content-item").get(navIndex)).css("display","block")
         .siblings().css("display","none");
       
    })
    /* $("#left").on('click',function(){
        $(".nav-item").hasClass("selected").index();
    }) */
})
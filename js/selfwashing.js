/* -----呼叫AOS ----- */
AOS.init({
    disable: 'mobile',
    once: true,
});


/* ----- 卡片翻轉 ----- */
let wdth = $(window).width();
//  YOU
 if(wdth > 767){
    // 點擊，切換 flipped 樣式
    $("div.you").on('click', function(){
        $(this).toggleClass('flipped');
    });

 }else{
    $("div.you").click(function(){
        $("this").unbind();
    });
 }
 
//  WE
if(wdth > 767){
   // 點擊，切換 flipped 樣式
   $("div.we").on('click', function(){
       $(this).toggleClass('flipped');
   });

}else{
   $("div.we").click(function(){
       $("this").unbind();
   });

}

/* ----- 價格輪播 ----- */

$(document).ready(function(){
       
           $('.owl-carousel').owlCarousel({
               responsive:{
                   0:{
                       items:1,
                       loop:true,
                       touchDrag:true,
                       margin:10,
                   },
                   866:{
                       items:3,
                       loop:false,
                       touchDrag:false,
                       autoplay:false,
                   }
               }
           });
});
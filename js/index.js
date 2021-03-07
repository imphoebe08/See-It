/* 呼叫GoTop */
$(function(){
    $(window).scroll(function(){
        let wScroll = $(window).scrollTop();
        if(wScroll > 876){
           $("#go_top").addClass("go_top_on");
        }else{
           $("#go_top").removeClass("go_top_on");
        }
    })
})

$(function(){

// 點擊按鈕，頁面滑到最上方
$("#go_top").on("click", function(e){
   e.preventDefault();
   $('html, body').animate({
   scrollTop: 0
   }, 750);
});

});

/* 呼叫AOS */
AOS.init({
   once: true,
});
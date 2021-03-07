$(function(){
        
    // 點擊按鈕，頁面滑到最上方
    $("#go_top").on("click", function(e){
        e.preventDefault();
        $('html, body').animate({
        scrollTop: 0
        }, 750);
    });
    
 });
 
 $(function(){   
    $(window).scroll(function () {
        let scrollVal = $(this).scrollTop();
        let header = $('header').height();
        // alert(header);
        if(window.innerWidth < 767){
            
            if(scrollVal > header){
                $('#menu_nav').css({
                    "position": "fixed","top": header,
                    "width": "100%",
                    "padding": "10px 0",
                    "background-color": "white",
                    "z-index": 1000,
                });          
            }else{
                $('#menu_nav').css({"position": "static"});
            }
        }else{
            $("#go_top").addClass("go_top_on");
          
        }
    });
 });
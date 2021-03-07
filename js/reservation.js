/*<!-- 頁籤切換 -->*/
        $(function(){
  
        // 點擊按鈕1
        $("button.ecostore_series_icon").on("click", function(){
            // div.content1 和 div.content2 都移除 -on 樣式
            $("div.content1, div.content2").removeClass("-on");
            
            // div.content1 加上 -on 樣式
            $("div.content1").addClass("-on");
        });
        
        // 點擊按鈕2
        $("button.washing_items_icon").on("click", function(){
            // div.content1 和 div.content2 都移除 -on 樣式
            $("div.content1, div.content2").removeClass("-on");
            
            // div.content2 加上 -on 樣式
            $("div.content2").addClass("-on");
        });
        
        });

 /*<!-- 手機袋子輪播 -->*/

    $(document).ready(function(){
                $('.owl-carousel').owlCarousel({
                    responsive:{
                        0:{
                            items:1,
                            loop:true,
                            touchDrag:true,
                            margin:10,
                            nav:true,
                        },
                        866:{
                            items:3,
                            loop:false,
                            touchDrag:false,
                            autoplay:false,
                        }
                    }
                });
    })

    $(window).ready(function(){
        $('.basketClick').click(function(){
            $('.right_sidebar').addClass('open');
        })
        $('.btn_close').click(function(){
            $('.right_sidebar').removeClass('open');
        })
    })


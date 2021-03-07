wdth = $(this).width();
    
    
if(wdth>768){
    $(document).ready(function(){
        $("#kao").on("click", function(){
            $("#popup_kao_google").toggle();
        })
        
        $('.login_box').on("click", function(){
            return false
        })     

     });

    $(document).ready(function(){
        $("#tpi").on("click", function(){
            $("#popup_tpi_google").toggle();
        })
        
        $('.login_box').on("click", function(){
            return false
        })
    });


}else{
    $(document).ready(function(){
        $("#kao").on("click", function(){
            $("#kao").off("onclick");
        })
    })

    $(document).ready(function(){
        $("#tpi").on("click", function(){
            $("#tpi").off("onclick");
        })
    })
}

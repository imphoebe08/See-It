$(document).ready(function(){
    $(".membership").on("click", function(){
        $("#login_pop").toggle();
    })
})
$(document).ready(function(){
    $(".payment").on("click", function(){
        $("#login_pop").toggle();
    })
})
$(document).ready(function(){
    $("#login_close").on("click", function(){
        $("#login_pop").toggle();
    })
    
    $('.login_box').on("click", function(){
        return false
    })
})
//袋子加減
$(document).ready(function() {
    $('.big_plus').click(function () {
        var $input = $(this).parent().find('input');
        $input.val(parseInt($input.val()) + 1);
        $input.change();
        return false;
        });
    $('.big_minus').click(function () {
        var $input = $(this).parent().find('input');
        var count = parseInt($input.val()) - 1;
        count = count < 1 ? 0 : count;
        $input.val(count);
        $input.change();
        return false;
        });
    });

//洗劑加購
$(document).ready(function() {
    $('.add_plus').click(function () {
        var $input = $(this).parent().find('input');
        $input.val(parseInt($input.val()) + 1);
        $input.change();
        return false;
        });
    $('.add_minus').click(function () {
        var $input = $(this).parent().find('input');
        var count = parseInt($input.val()) - 1;
        count = count < 1 ? 0 : count;
        $input.val(count);
        $input.change();
        return false;
        });
    });
    
//其他商品加減
$(document).ready(function() {
        $('.products_plus').click(function () {
            var $input = $(this).parent().find('input');
            $input.val(parseInt($input.val()) + 1);
            $input.change();
            return false;
            });
		$('.products_minus').click(function () {
			var $input = $(this).parent().find('input');
			var count = parseInt($input.val()) - 1;
			count = count < 1 ? 0 : count;
			$input.val(count);
			$input.change();
			return false;
			});
        });
/* ---------------------- 我是分隔線 ------------------------*/

// 購物車
$(document).ready(function() {
  var cartCountValue = 0; 
  var cartCount = $('.car .count');
  $(cartCount).text(cartCountValue);


  $('.addButton').on('click', function() {
    var cartBtn = this;
    var carValue1 = $(this).closest("div.big_buy").find("input.big_quantity").val();
    var carValue2 = $(this).closest("div.add_detergent").find("input.add_quantity").val();
    var carValue3 = $(this).closest("div.products_card").find("input.products_quantity").val();
    
    
    var total = 0
    $("input.big_quantity").each(function(){
        total += parseInt($(this).val());
    });
    $("input.add_quantity").each(function(){
        total += parseInt($(this).val());
    });
    $("input.products_quantity").each(function(){
        total += parseInt($(this).val());
    });

    var carValue = parseInt(carValue1 + carValue2 + carValue3);
    
    $("span.count").html(total);

  $(function(){

  // 點擊
    $("button.btn_drawer").on("click", function(){
      
      // -open 的樣式切換
      $(this).closest("div.right_sidebar").toggleClass("-open");
      
    });
  });
});
});
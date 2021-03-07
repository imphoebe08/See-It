var $window = $(window);
var lastWindowWidth = $window.width();

$window.resize(function () {
    var windowWidth = $window.width();

    if (lastWindowWidth !== windowWidth) {
        setTimeout(function(){
        location.reload(),1000;
        })
    }
});



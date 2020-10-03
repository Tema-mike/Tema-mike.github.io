

$(".menu").hover(function(){
    $(this).addClass('action-menu');
    $((this).children).addClass('action-item');

}, function () {
    $(this).removeClass('action-menu');
    $((this).children).removeClass('action-item')
});


//function itemAnimate() {


//}
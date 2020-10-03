

$(".menu").hover(function(){
    $(this).addClass('action-menu');
    $((this).children).addClass('action-item');
    console.log('pidor');
}, function () {
    $(this).removeClass('action-menu');
    $((this).children).removeClass('action-item');
    console.log('No pidor');
});


//function itemAnimate() {


//}
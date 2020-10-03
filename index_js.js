

$(".menu").hover(function(){

    $(this).addClass('action-menu');
    let content = $(this).children;
    content.addClass('action-item');

    //console.log (menu);

}, function () {

    $(this).removeClass('action-menu');
    let content = $(this).children;
    content.removeClass('action-item');
});


function itemAnimate() {


}


$(".menu").hover(function(){

    $(this).addClass('action-menu');
    let content = $(this).child;
    content.addClass('action-item');

    //console.log (menu);

}, function () {

    $(this).removeClass('action-menu');
    let content = $(this).child;
    content.removeClass('action-item');
});


function itemAnimate() {


}
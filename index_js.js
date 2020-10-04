$(document).ready(() => {
    setTimeout(preFont,1000);
});
function preFont(){
    $(".is-preload").removeClass("is-preload");
    $("h1").addClass("logo-text");
}

$(".menu").hover(function(){
    $(this).addClass('action-menu');
    $((this).children).addClass('action-item');
    $((this).children).css("display", "block");

}, function () {
    $(this).removeClass('action-menu');
    $((this).children).removeClass('action-item');
    $((this).children).css("display", "none");
});
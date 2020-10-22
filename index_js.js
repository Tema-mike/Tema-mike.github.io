// Start animation
$(document).ready(() => {
    setTimeout(preFont,1000);
});
function preFont(){
    $(".is-preload").removeClass("is-preload");
    $("h1").addClass("logo-text");
}

// animation of menu's items
$(".menu").hover(function(){
    $(this).addClass('action-menu');
    $((this).children).addClass('action-item');
    $((this).children).css("display", "block");

}, function () {
    $(this).removeClass('action-menu');
    $((this).children).removeClass('action-item');
    $((this).children).css("display", "none");
});

// Mobile form for menu's items
$("#menu-btn").click(event => {
    $('body').css('overflow','hidden');
    $("#menu-container").css('display','block');
});
$("#close").click(event => {
    $('body').css('overflow','auto');
    $("#menu-container").css('display','none');
});



$(".menu").hover(e => function(){

    className = document.getElementsByClassName('menu');
    $(className).addClass('acton-menu');
    //$(this).addClass('action-menu');
    //let menu = $(this).attr('id');
    //let id_menu = menu.attr('id');

    //console.log (menu);

}, function () {

    $(this).removeClass('action-menu');
});


function itemAnimate() {


}
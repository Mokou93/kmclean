/*$(document).ready(function() {
    $(window).scroll(function() {
        if ($(window).scrollTop() >= 50) {
            $('.navbar').css('background', 'transparent');
        } else {
            $('.navbar').css('background', 'red');
        }
    });

});*/
/*function phoneZoom() {
    phoneLink = document.getElementById('#container-phone-basket');
    phoneLink.classList.toggle('phone-zoom');
}*/

/*function phoneZoom(multiplier) {
    if (document.body.style.fontSize == "") {
        document.body.style.fontSize = "1.0em";
    }
    document.body.style.fontSize = parseFloat(document.body.style.fontSize) + (multiplier * 0.2) + "em";
}*/

$(function() {
            $('.navbar-toggler').on('click', function(event) {
                event.preventDefault();
                $(this).closest('.navbar-nav').toggleClass('open');
            })
//barre de progression
window.onscroll = function() { myFunction() };

function myFunction() {
    let winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    let height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    let scrolled = (winScroll / height) * 100;
    document.getElementById("myBar").style.width = scrolled + "%";
}
//slide
$('.carousel').carousel({
    interval: 5000
})
$('.navDiv-btn').mouseenter(function (e) {
    this.classList.toggle('border-bottom'); // adds border bottom
}).mouseleave(function(e) {
    this.classList.toggle('border-bottom'); // removes border bottom
});

$('footer ul li span').mouseenter(function() {
    this.classList.toggle('border-bottom'); // adds border to the span ( to only take the text width, not the entire li's)
}).mouseleave(function() {
    this.classList.toggle('border-bottom'); // removes the border
});
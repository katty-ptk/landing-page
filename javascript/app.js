$('.navDiv-btn').mouseenter(function (e) {
    this.classList.toggle('border-bottom'); // adds border bottom
}).mouseleave(function(e) {
    this.classList.toggle('border-bottom'); // removes border bottom
});
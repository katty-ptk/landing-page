$('.navDiv-btn').mouseenter(function() {
    this.classList.toggle('border-bottom'); // adds border bottom
}).mouseleave(function() {
    this.classList.toggle('border-bottom'); // removes border bottom
});

$('footer ul li span').mouseenter(function() {
    this.classList.toggle('border-bottom'); // adds border to the span ( to only take the text width, not the entire li's)
}).mouseleave(function() {
    this.classList.toggle('border-bottom'); // removes the border
});


const seeConnect = document.querySelector('.see-more');
$('#connect').click(function() {
    if ( seeConnect.classList.contains('not-visible') ) {
        seeConnect.classList.remove('not-visible');
        seeConnect.classList.add('visible');    // makes connect menu visible

        $('#connect-icon').css('transform', 'rotate(180deg)'); // points up ( close )
    } else {
        seeConnect.classList.remove('visible');
        seeConnect.classList.add('not-visible');    // hides connect menu

        $('#connect-icon').css('transform', 'rotate(360deg)'); // points down ( open )
    }
});
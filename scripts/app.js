
document.addEventListener('scroll',() => {
    const col = document.getElementById('scroll');
    if (window.scrollY > 0){
        col.classList.add('bg-light');
    }else {
        col.classList.remove('bg-light');
    }
})

$(document).ready(function() {
    // Show or hide the sticky footer button
    $(window).scroll(function() {
        if ($(this).scrollTop() > 200) {
            $('.go-top').fadeIn(500);
        } else {
            $('.go-top').fadeOut(300);
        }
    });

    // Animate the scroll to top
    $('.go-top').click(function(event) {
        event.preventDefault();

        $('html, body').animate({scrollTop: 0}, 300);
    })
});



$(function() {

    var typed = new Typed('#today-jackpot', {
        // Waits 1000ms after typing "First"
        strings: ['Today’s Jackpot'],
        typeSpeed: 200,
        backSpeed:100,
        loop: true,
    });
    // counterUp
    $('.counter').counterUp({
        delay: 20,
        time: 2000,
    })

    // window scrolling
    var backToTop = $('.back-to-top')
        // scrolling
    $(window).scroll(function() {
        var scrolling = $(this).scrollTop();

        if (scrolling > 500) {
            $('.back-to-top').fadeIn();
        } else {
            $('.back-to-top').fadeOut();
        }
        if (scrolling > 600) {
            $('.navbar').addClass('fixed-nav');
        } else {
            $('.navbar').removeClass('fixed-nav');
        }


    });

    // backToTop click
    backToTop.click(function() {
        $('html,body').animate({
            scrollTop: 0,
        }, 1500);
    });

    // Set the date we're counting down to
    var countDownDate = new Date("Jan 5, 2022 15:37:25").getTime();

    // Update the count down every 1 second
    var x = setInterval(function() {

        // Get today's date and time
        var now = new Date().getTime();

        // Find the distance between now and the count down date
        var distance = countDownDate - now;

        // Time calculations for days, hours, minutes and seconds

        var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance % (1000 * 60)) / 1000);

        // Output the result in an element with id="demo"
        document.getElementById("demo").innerHTML = hours + "h ";
        document.getElementById("demo1").innerHTML = minutes + "m ";
        document.getElementById("demo2").innerHTML = seconds + "s ";

        // If the count down is over, write some text 
        if (distance < 0) {
            clearInterval(x);
            document.getElementById("demo").innerHTML = "EXPIRED";
        }
    }, 1000);

    new WOW().init();
});
$(document).ready(function ()
{
    $('li').on('click', function ()
    {
        $('li').each(function ()
        {
            $(this).removeClass('active');
        });
        $(this).toggleClass('active');
    });

    var $articles = $('.wrapper article');

    $articles.not($articles.first()).hide(0);

    $('a[href!="#"]').on('click', function (event)
    {
        var $target = $($(event.target).attr('href'));

        if ($target.length)
        {
            $articles.fadeOut(200).delay(200);
            $target.fadeIn(200);
        }

    });

    var $hash = $('a[href=' + window.location.hash + ']');
    if ($hash.length)
    {
        $hash.click();
    }


    //Check to see if the window is top if not then display button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 200) {
            $('.scrollToTop').fadeIn();
        } else {
            $('.scrollToTop').fadeOut();
        }
    });

    //Click event to scroll to top
    $('.scrollToTop').click(function () {
        $('html, body').animate({scrollTop: 0}, 800);
        return false;
    });

    //Keep navigation bar fixed after scrolling the webpage
    var navpos = $('#mainnav').offset();
    $(window).bind('scroll', function () {
        if ($(window).scrollTop() > navpos.top) {
            $('#mainnav').addClass('fixed');
        }
        else {
            $('#mainnav').removeClass('fixed');
        }
    });

});
$(document).ready(function() {

    $('.topBuy').click(function(e) {
        $('html').addClass('window-size-open');
        e.preventDefault();
    });
    
    $('.window-size-close').click(function(e) {
        $('html').removeClass('window-size-open');
        e.preventDefault();
    });

    $('body').on('keyup', function(e) {
        if (e.keyCode == 27) {
            $('html').removeClass('window-size-open');
        }
    });

    $(document).click(function(e) {
        if ($(e.target).hasClass('window-size')) {
            $('html').removeClass('window-size-open');
        }
    });
    
    $('.window-size-btn-no').click(function(e) {
        $('html').removeClass('window-size-open');
        window.open($(this).attr('href'));
        e.preventDefault();
    });

});
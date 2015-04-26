( function( $ ) {

    // BackToTop
    if ( ($(window).height() + 100) < $(document).height() ) {
        $('#top-link-block').removeClass('hidden').affix({
            // how far to scroll down before link "slides" into view
            offset: {top:100}
        });
    }

    // Class active menu
    var url = window.location;
    $('ul.nav a[href="' + url + '"]').parent().addClass('active');
    $('ul.nav a').filter(function() {
        return this.href == url;
    }).parent().addClass('active');

    // Background homepage
    switch (window.location.pathname) {
    case '/':
        $('body').addClass('background')
    }

} )( jQuery );
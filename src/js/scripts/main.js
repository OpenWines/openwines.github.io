( function( $ ) {

    // BackToTop
    if ( ($(window).height() + 100) < $(document).height() ) {
        $('#top-link-block').removeClass('hidden').affix({
            // how far to scroll down before link "slides" into view
            offset: {top:100}
        });
    }

    // Active page menu
    var url = window.location;
    // Will only work if string in href matches with location
    $('ul.nav a[href="' + url + '"]').parent().addClass('active');
    // Will also work for relative and absolute hrefs
    $('ul.nav a').filter(function() {
        return this.href == url;
    }).parent().addClass('active');

    // Background homepage
    /*switch (window.location.pathname) {
    case '/':
        $('#main').addClass('background')
    }*/

} )( jQuery );
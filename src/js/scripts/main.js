( function( $ ) {

    // Loading homepage
    $(window).load(function() {

        var translations = ['fr'];
        var language = window.navigator.userLanguage || window.navigator.language;
        if(!docCookies.getItem("preferred-lang")
            && window.location.pathname == '/'
            && 0 >= translations.indexOf(language)) {
            docCookies.setItem("preferred-lang", language);
            window.location.href = "/" + language;
        }

        var $homeLoad = $('body.background .se-pre-con');

        if ($homeLoad.length) {
            $homeLoad.fadeOut("slow");
        }
    });

    // Responsive SlideShare slides
    var $slideShare = $('iframe[src*="slideshare.net"]');
    if ($slideShare.length) {
        $slideShare.wrap('<div class="embed-responsive embed-responsive-16by9"></div>');
        $slideShare.addClass('embed-responsive-item');
    }

    // Background homepage
    switch (window.location.pathname) {
        case "/":
            $('body').addClass('background');
        break;
        case "/fr/":
            $('body').addClass('background');
        break;
        case "/it/":
            $('body').addClass('background');
        break;
    }

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

} )( jQuery );
( function( $ ) {

    // Loading homepage
    $(window).load(function() {

        var translations = ['fr'];
        /*
        var language = window.navigator.userLanguage || window.navigator.language;
        if(!docCookies.getItem("preferred-lang")
            && window.location.pathname == '/'
            && 0 >= translations.indexOf(language)) {
            docCookies.setItem("preferred-lang", language);
            window.location.href = "/" + language;
        }
        */
        var $homeLoad = $('body.background .se-pre-con');

        if ($homeLoad.length) {
            $homeLoad.fadeOut("slow");
        }
    });

    // Responsive SlideShare slides
    var $slideShare = $('iframe[src*="slideshare.net"]');
    if ($slideShare.length) {
        $slideShare.wrap('<div class="embed-responsive embed-responsive-16by9 slideshare-about-us"></div>');
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

    // Add class img-responsive
    var $imgResponsive = $('article p img');

    if ($imgResponsive.length) {
        $imgResponsive.addClass("thumbnail img-responsive");
    }

    // Add class to table elements
    var $tableClass = $('article table');

    if ($tableClass.length) {
        $tableClass.addClass('table table-bordered table-condensed table-striped').wrap("<div class='table-responsive'></div>");
        $('th:empty').hide('thead');
    }

    // Shameless hack
    $(document.links).filter(function() {
        return this.hostname != window.location.hostname;
    }).attr('target', '_blank');

} )( jQuery );
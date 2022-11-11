// -----------------------------------------------------------------------------
// WHEN DOCUMENT IS READY
// -----------------------------------------------------------------------------
$(document).ready(function(){

    // -----------------------------------------------------------------------------
    // DESKTOP NAVIGATION BAR
    // -----------------------------------------------------------------------------
    function animateDesktopNavigationBar(){
        let desktopNavigatoinBar = $('.desktop-navigation-bar');
        $(window).scroll(function() {
            if ($(window).scrollTop() >= 1) {
                desktopNavigatoinBar.addClass('scrolled');
            } else{
                desktopNavigatoinBar.removeClass('scrolled');
            }
        });
    }
    animateDesktopNavigationBar();

    // -----------------------------------------------------------------------------
    // LANGUAGE SWITCHER
    // -----------------------------------------------------------------------------
    function showLanguageSwitcher(){
        let languageSwitcher = $('.language-switcher');
        languageSwitcher.on("click", function(event){
            event.stopPropagation();
            $(this).toggleClass('show');
        });
        $('html').on("click", function(event){
            languageSwitcher.removeClass('show');
        });
    }
    showLanguageSwitcher();

    // -----------------------------------------------------------------------------
    // MOBILE NAVIGATION BAR
    // -----------------------------------------------------------------------------
    function showHideMobileNavMenu(){
        let hamburgerMenuBtn = $('.hamburger-menu');
        let mobileNavigationMenu = $('.mobile-navbar');
        let mobileNavOverlay = mobileNavigationMenu.find('.mobile-nav-overlay');
        let mobileNavCloseBtn = mobileNavigationMenu.find('.mobile-nav-btn');
        var mobileNavdropdownMenu = mobileNavigationMenu.find('li.dropdown');
        hamburgerMenuBtn.on('click', function(){
            mobileNavigationMenu.addClass('show');
        });
        mobileNavCloseBtn.on('click', function(){
            mobileNavigationMenu.removeClass('show');
        });
        mobileNavdropdownMenu.on('click', function(){
            $(this).toggleClass('show');
        });    
        mobileNavOverlay.on('click', function(){
            mobileNavigationMenu.removeClass('show');
        });
    }
    showHideMobileNavMenu();

    // -----------------------------------------------------------------------------
    // HOMEPAGE SLIDER
    // -----------------------------------------------------------------------------
    function initalizeHomepageSlide(){
        let homepageSlider = $('.homepage-slider-container');
        homepageSlider.slick({
            autoplay: true,
            autoplaySpeed: 5000,
            dots: true,
            appendDots: $('.slick-dots-position'),
            arrows: false,
            slidesToShow: 1,
            slidesToScroll: 1,
            speed: 1000,
            infinte: true,
            pauseOnHover: true,
            draggable: false,
            fade: true
        });
        homepageSlider.slickAnimation();
    }
    initalizeHomepageSlide();

    // -----------------------------------------------------------------------------
    // HOMEPAGE PRODUCTS SLIDER
    // -----------------------------------------------------------------------------
    function initalizeHomepageProductsSlider(){
        let homepageSlider = $('.homepage-products .products-slider');
        homepageSlider.slick({
            autoplay: true,
            autoplaySpeed: 5000,
            dots: false,
            arrows: true,
            slidesToShow: 3,
            slidesToScroll: 1,
            speed: 1000,
            infinte: true,
            pauseOnHover: true,
            draggable: false,
            fade: false,
            responsive: [
                {
                    breakpoint: 1100,
                    settings: {
                        slidesToShow: 2
                    }
                },
                {
                    breakpoint: 750,
                    settings: {
                        slidesToShow: 1
                    }
                }
            ]
        });
    }
    initalizeHomepageProductsSlider();

    // -----------------------------------------------------------------------------
    // INITALIZE WOW
    // -----------------------------------------------------------------------------
    if($(window).width() > 1300) {
        new WOW().init();
    }

});
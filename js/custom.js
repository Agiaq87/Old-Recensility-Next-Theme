/*var sidebar =  document.getElementById('recensility-sidebar-one-wrapper');
var silence = document.getElementById('recensility-silence');
var rumor = document.getElementById('recensility-rumor');

    if( document.body.clientWidth < 835 ){
        console.log('mobile mode');

        sidebar.style.cssText = 'left: 29%; padding: 0.125em';

        console.log(sidebar);
        console.log(rumor);
        console.log(silence);

        silence.style.cssText = 'display: flow-root;position: fixed;left: 72%;top: 33%;font-weight: bolder;font-size: 20px;border-radius: 5%';
        rumor.style.cssText = 'display:none;';

        silence.onclick = function(){
            console.log('event on touch button');

            sidebar.style.cssText = 'left: 0%;';

            silence.style.cssText = 'display: none;';

            rumor.style.cssText = 'position: absolute; top: 4%; left: 80%; color: #fff; font-weight: bolder;font-size: 20px;';
        }

        rumor.onclick = function(){
            console.log('event off touch button');

            sidebar.style.cssText = 'left: 29%;';

            rumor.style.cssText = 'display: none;';

            silence.style.cssText = 'display: flow-root;position: fixed;left: 72%;top: 33%;font-weight: bolder;font-size: 20px;border-radius: 5%';
        }

    } else {
        console.log('desktop mode');

        silence.style.cssText = 'display: none';

        rumor.style.cssText = 'display: none;';
    }
     */   
    
    
    
    /*silence.onclick = function(){
            console.log(sidebar.classList);
            sidebar.classList.toogle("recensility-rumor");
            console.log(sidebar);
        };*/
    //}
    /*
    // grab the initial top offset of the navigation 
    var recensilitystickyNavTop = $('.recensility-primary-menu-container').offset().top;
    
    // our function that decides weather the navigation bar should have "fixed" css position or not.
    var recensilitystickyNav = function(){
        var recensilityscrollTop = $(window).scrollTop(); // our current vertical position from the top
             
        if (recensilityscrollTop > recensilitystickyNavTop) {
            $('.recensility-primary-menu-container').addClass('recensility-fixed');
        } else {jQuery(document).ready(function($) {

            //Width
            console.log(document.body.clientWidth);
        
            if( document.body.clientWidth < 835 ){
                
                // Sidebar on the left
                var sidebar = $('.recensility-sidebar-one-wrapper').css({left: '20%', border: '3px solid #2f6d43'});
        
                /*$('.recensility-silence').click() = function(){
                    if (sidebar.left == '20%'){
                        sidebar.css({left: '10%'});
                    }  {
                        sidebar.css({left: '20%', border: '3px solid #2f6d43'});
                    }
                }*/
        /*
                console.log(sidebar);
        
                var parent = $('.recensility-sidebar-one-wrapper').parent();
        
                console.log(parent);
            }
            
            // grab the initial top offset of the navigation 
            var recensilitystickyNavTop = $('.recensility-primary-menu-container').offset().top;
            console.log(recensilitystickyNavTop);
            
            // our function that decides weather the navigation bar should have "fixed" css position or not.
            var recensilitystickyNav = function(){
                var recensilityscrollTop = $(window).scrollTop(); // our current vertical position from the top
                     
                if (recensilityscrollTop > recensilitystickyNavTop) {
                    $('.recensility-primary-menu-container').addClass('recensility-fixed');
                } else {
                    $('.recensility-primary-menu-container').removeClass('recensility-fixed'); 
                }
                    
                }
        
            recensilitystickyNav();
            // and run it again every time you scroll
            $(window).scroll(function() {
                recensilitystickyNav();
            });
            
            $(".recensility-nav-primary .recensility-nav-primary-menu").addClass("recensility-primary-responsive-menu").before('<div class="recensility-primary-responsive-menu-icon"></div>');
        
            $(".recensility-primary-responsive-menu-icon").click(function(){
                $(this).next(".recensility-nav-primary .recensility-nav-primary-menu").slideToggle();
            });
        
            $(window).resize(function(){
                if(window.innerWidth > 835) {
                    $(".recensility-nav-primary .recensility-nav-primary-menu, nav .sub-menu, nav .children").removeAttr("style");
                    $(".recensility-primary-responsive-menu > li").removeClass("recensility-primary-menu-open");
                }
            });
        
            $(".recensility-primary-responsive-menu > li").click(function(event){
                if (event.target !== this)
                return;
                $(this).find(".sub-menu:first").slideToggle(function() {
                    $(this).parent().toggleClass("recensility-primary-menu-open");
                });
                $(this).find(".children:first").slideToggle(function() {
                    $(this).parent().toggleClass("recensility-primary-menu-open");
                });
            });
        
            $("div.recensility-primary-responsive-menu > ul > li").click(function(event) {
                if (event.target !== this)
                    return;
                $(this).find("ul:first").slideToggle(function() {
                    $(this).parent().toggleClass("recensility-primary-menu-open");
                });
            });
        
            $(".recensility-social-search-icon").on('click', function (e) {
                e.preventDefault();
                $('.recensility-social-search-box').slideToggle(400);
            });
        
            //$(".post").fitVids();
        
            $( 'body' ).prepend( '<div class="recensility-scroll-top"></div>');
            var scrollButtonEl = $( '.recensility-scroll-top' );
            scrollButtonEl.hide();
        
            $( window ).scroll( function () {
                if ( $( window ).scrollTop() < 20 ) {
                    $( '.recensility-scroll-top' ).fadeOut();
                } else {
                    $( '.recensility-scroll-top' ).fadeIn();
                }
            } );
        
            scrollButtonEl.click( function () {
                $( "html, body" ).animate( { scrollTop: 0 }, 300 );
                return false;
            } );
        
            $('.recensility-main-wrapper, .recensility-sidebar-one-wrapper').theiaStickySidebar({
                containerSelector: ".recensility-content-wrapper",
                additionalMarginTop: 0,
                additionalMarginBottom: 0,
                minWidth: 890,
            });
        
        });
        
            $('.recensility-primary-menu-container').removeClass('recensility-fixed'); 
        }
            
        }

    recensilitystickyNav();
    // and run it again every time you scroll
    $(window).scroll(function() {
        recensilitystickyNav();
    });
    
    $(".recensility-nav-primary .recensility-nav-primary-menu").addClass("recensility-primary-responsive-menu").before('<div class="recensility-primary-responsive-menu-icon"></div>');

    $(".recensility-primary-responsive-menu-icon").click(function(){
        $(this).next(".recensility-nav-primary .recensility-nav-primary-menu").slideToggle();
    });

    $(window).resize(function(){
        if(window.innerWidth > 1112) {
            $(".recensility-nav-primary .recensility-nav-primary-menu, nav .sub-menu, nav .children").removeAttr("style");
            $(".recensility-primary-responsive-menu > li").removeClass("recensility-primary-menu-open");
        }
    });

    $(".recensility-primary-responsive-menu > li").click(function(event){
        if (event.target !== this)
        return;
        $(this).find(".sub-menu:first").slideToggle(function() {
            $(this).parent().toggleClass("recensility-primary-menu-open");
        });
        $(this).find(".children:first").slideToggle(function() {
            $(this).parent().toggleClass("recensility-primary-menu-open");
        });
    });

    $("div.recensility-primary-responsive-menu > ul > li").click(function(event) {
        if (event.target !== this)
            return;
        $(this).find("ul:first").slideToggle(function() {
            $(this).parent().toggleClass("recensility-primary-menu-open");
        });
    });

    $(".recensility-social-search-icon").on('click', function (e) {
        e.preventDefault();
        $('.recensility-social-search-box').slideToggle(400);
    });

    //$(".post").fitVids();

    $( 'body' ).prepend( '<div class="recensility-scroll-top"></div>');
    var scrollButtonEl = $( '.recensility-scroll-top' );
    scrollButtonEl.hide();

    $( window ).scroll( function () {
        if ( $( window ).scrollTop() < 20 ) {
            $( '.recensility-scroll-top' ).fadeOut();
        } else {
            $( '.recensility-scroll-top' ).fadeIn();
        }
    } );

    scrollButtonEl.click( function () {
        $( "html, body" ).animate( { scrollTop: 0 }, 300 );
        return false;
    } );

    $('.recensility-main-wrapper, .recensility-sidebar-one-wrapper').theiaStickySidebar({
        containerSelector: ".recensility-content-wrapper",
        additionalMarginTop: 0,
        additionalMarginBottom: 0,
        minWidth: 890,
    });


*/

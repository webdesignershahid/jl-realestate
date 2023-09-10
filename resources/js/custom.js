(function ($) {
    "use strict";

    var jl_real_estate = {
        
        /* ============================================================ */
        /* PRELOADER
        /* ============================================================ */
        preloader: function(){
            $(window).on('load', function() {
                $(".preloader").fadeOut();     
            });
        },

        
        /* ============================================================ */
        /* Mobile Menu Intigration
        /* ============================================================ */
        mobile_menu: function() {
            function mobile_menu(selector, actionSelector) {
                var mobile_menu = $(selector);
                mobile_menu.on("click", function() {
                    $(selector).toggleClass('is-menu-open');
                });
                
                var hamburgerbtn = $(selector);
                hamburgerbtn.on("click", function() {
                    $(actionSelector).toggleClass('is-menu-open');
                });
        
                $(document).on('click', function(e) {
                    var selectorType = $(actionSelector).add(mobile_menu);
                    if (selectorType.is(e.target) !== true && selectorType.has(e.target).length === 0) {
                        $(actionSelector).removeClass("is-menu-open");
                        $(selector).removeClass("is-menu-open");
                    }          
                });
            
            };
            mobile_menu('.nav-toggle, .close-menu', '.mobile-menu');

            $('.mobile-menu ul li.item-has-submenu > a').on('click', function() {
                $('.mobile-menu ul li.item-has-submenu .submenu').each(function() { 
                    if($(this).is(":visible")) { 
                        $(this).slideUp(); 
                    }
                }); 
                if($(this).parent('li').children('.submenu').length) {
                    if(!$(this).parent('li').children('.submenu').is(":visible")) { 
                        $(this).parent('li').children('.submenu').slideToggle();
                    }
                    return false; 
                }
            });

            $('.mobile-menu ul li.item-has-sub-submenu a').on('click', function() {
                $('.mobile-menu ul li.item-has-sub-submenu .sub-submenu').each(function() { 
                    $(this).slideToggle();
                });                 
            });

            var $submenuIndicator = $('.mobile-menu li.item-has-submenu > a, .mobile-menu li.item-has-sub-submenu > a');
		    $submenuIndicator.append('<span class="sub-menu-indicator float-end"><svg xmlns="http://www.w3.org/2000/svg"  x="0px" y="0px" width="12px" height="12px" viewBox="0 0 792 792" style="transform: rotate(90deg)" fill="#fff" > <polygon points="580.802,369.604 580.802,369.604 211.198,0 184.802,26.396 554.405,396 184.802,765.604 211.198,792 607.198,396 "/> </svg></span>');
		
        },

        /* ============================================================ */
        /* Sticky Menu
        /* ============================================================ */
        sticky_menu: function() {
            var fixed_top = $(".site-header");
            $(window).on('scroll', function () {
                if ($(this).scrollTop() > 100) {
                    fixed_top.addClass("is-sticky");
                } else {
                    fixed_top.removeClass("is-sticky");
                }
            });
        },

        /* ============================================================ */
        /* Scroll Top
        /* ============================================================ */
        scroll_to_top: function() {
            $('body').append(
                "<a href='#top' id='scroll-top' class='topbutton btn-hide'><span class='fas fa-level-up-alt'></span></a>"
            );
            var $scrolltop = $('#scroll-top');
            $(window).on('scroll', function () {
                if ($(this).scrollTop() > $(this).height()) {
                    $scrolltop.addClass('btn-show').removeClass('btn-hide');
                } else {
                    $scrolltop.addClass('btn-hide').removeClass('btn-show');
                }
            });
            $("a[href='#top']").on('click', function () {
                $('html, body').animate(
                    {
                        scrollTop: 0,
                    },
                    'normal'
                );
                return false;
            });
        },


        /* ============================================================ */
        /* Background Image
        /* ============================================================ */
        background_image: function() {
            $("[data-bg-color], [data-bg-image], [data-bg-particles]").each(function() {
                var $this = $(this);
    
                if( $this.hasClass("pt-separate-bg-element") ){
                    $this.append('<div class="pt-background">');
    
                    // Background Color    
                    if( $("[data-bg-color]") ){
                        $this.find(".pt-background").css("background-color", $this.attr("data-bg-color") );
                    }
    
                    // Background Image
                    if( $this.attr("data-bg-image") !== undefined ){
                        $this.find(".pt-background").append('<div class="pt-background-image">');
                        $this.find(".pt-background-image").css("background-image", "url("+ $this.attr("data-bg-image") +")" );
                        $this.find(".pt-background-image").css("background-size", $this.attr("data-bg-size") );
                        $this.find(".pt-background-image").css("background-position", $this.attr("data-bg-position") );
                        $this.find(".pt-background-image").css("opacity", $this.attr("data-bg-image-opacity") );
    
                        $this.find(".pt-background-image").css("background-size", $this.attr("data-bg-size") );
                        $this.find(".pt-background-image").css("background-repeat", $this.attr("data-bg-repeat") );
                        $this.find(".pt-background-image").css("background-position", $this.attr("data-bg-position") );
                        $this.find(".pt-background-image").css("background-blend-mode", $this.attr("data-bg-blend-mode") );
                    }
    
                    // Parallax effect    
                    if( $this.attr("data-bg-parallax") !== undefined ){
                        $this.find(".pt-background-image").addClass("pt-parallax-element");
                    }
                }
                else {
    
                    if(  $this.attr("data-bg-color") !== undefined ){                        
                        $this.css("background-color", $this.attr("data-bg-color") );
                        if( $this.hasClass("btn") ) {
                            $this.css("border-color", $this.attr("data-bg-color"));
                        }
                    }
    
                    if( $this.attr("data-bg-image") !== undefined ){
                        $this.css("background-image", "url("+ $this.attr("data-bg-image") +")" );    
                        $this.css("background-size", $this.attr("data-bg-size") );
                        $this.css("background-repeat", $this.attr("data-bg-repeat") );
                        $this.css("background-position", $this.attr("data-bg-position") );
                        $this.css("background-blend-mode", $this.attr("data-bg-blend-mode") );
                    }
                }
            });
        },


        /* ============================================================ */
        /* Owl Carousel
        /* ============================================================ */
        owlCarousel: function(){
           
            var heroCarousel = $('.hero-carousel');
            heroCarousel.owlCarousel({
                items: 1,
                loop: 1,
                dots: !1,
                nav: !1,
                autoplay: 1,
                autoplaySpeed: 800,
                autoplayTimeout: 5000,
            });

            var heroCarousel = $('.featured-properties-carousel');
            heroCarousel.owlCarousel({
                items: 2,
                loop: 1,
                dots: !1,
                nav: !1,
                autoplay: 1,
                margin: 30,
                autoplaySpeed: 800,
                autoplayTimeout: 5000,
            });

            var heroCarousel = $('.client-testimonial');
            heroCarousel.owlCarousel({
                items: 3,
                loop: 1,
                dots: !1,
                nav: !1,
                autoplay: 1,
                margin: 30,
                autoplaySpeed: 800,
                autoplayTimeout: 6000,
            });
            var singlePropertyMedia = $('.property-details-wrapper .media.owl-carousel');
            singlePropertyMedia.owlCarousel({
                items: 1,
                loop: 1,
                dots: !1,
                nav: 1,
                autoplay: 1,
                autoplaySpeed: 800,
                autoplayTimeout: 6000,
            });

            $(".popup-video").modalVideo();


        },

        /* ============================================================ */
        /* Global activation
        /* ============================================================ */
        globalActivation: function(){
            $(function() {
                $("#slider-range").slider({
                    range: true,
                    min: 0,
                    max: 5000,
                    values: [400, 2500],
                    slide: function(event, ui) {
                        $("#min_size").val(ui.values[0]);
                        $("#max_size").val(ui.values[1]);
                    }
                });
                $("#min_size").val($("#slider-range").slider("values", 0));
                $("#max_size").val($("#slider-range").slider("values", 1));
                $("#min_size").change(function() {
                    $("#slider-range").slider("values", 0, $(this).val());
                });
                $("#max_size").change(function() {
                    $("#slider-range").slider("values", 1, $(this).val());
                })
            });


            $('.video-background').vide('resources/videos/vide-bg');

            $("#valuation_date").flatpickr({
                defaultDate: new Date(),
            });
        },

        initializ: function() {
			jl_real_estate.preloader();
			jl_real_estate.mobile_menu();
			jl_real_estate.owlCarousel();
			jl_real_estate.scroll_to_top();
			jl_real_estate.sticky_menu();;
			jl_real_estate.background_image();
			jl_real_estate.globalActivation();
		}

    };
    $(function() {
		jl_real_estate.initializ();
	});


})(jQuery);